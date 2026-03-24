#!/usr/bin/env python3
"""
OBS テロップシステム - ローカルサーバー (Python版)
HTTP静的ファイル配信 + WebSocketリレーサーバー
"""
import asyncio
import json
import os
import re
import time
import threading
import weakref
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote

try:
    import websockets
    from websockets.asyncio.server import serve
except ImportError:
    print("エラー: websockets ライブラリが必要です")
    print("  pip3 install websockets --break-system-packages")
    exit(1)

import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--root", help="Project root directory containing 'public/' folder")
args, unknown = parser.parse_known_args()

PORT_HTTP = 5500
PORT_WS   = 5501

if args.root:
    PUBLIC_DIR = Path(args.root) / "public"
else:
    # 候補1: カレントディレクトリにある public
    _cwd_public = (Path.cwd() / "public").resolve()
    # 候補2: スクリプトの隣にある public (アプリ同梱時: Resources/public)
    _bundle_public = (Path(__file__).parent / "public").resolve()
    # 候補3: スクリプトの1階層上にある public (開発時: src/../public)
    _src_public = (Path(__file__).parent.parent / "public").resolve()

    if _cwd_public.exists():
        PUBLIC_DIR = _cwd_public
    elif _bundle_public.exists():
        PUBLIC_DIR = _bundle_public
    elif _src_public.exists():
        PUBLIC_DIR = _src_public
    else:
        PUBLIC_DIR = _src_public # デフォルト

print(f"[DEBUG] PUBLIC_DIR: {PUBLIC_DIR}")

# ===== HTTP サーバー (静的ファイル配信) =====
class OBSHTTPHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PUBLIC_DIR), **kwargs)

    def do_GET(self):
        # ルートアクセス → コントロールパネルにリダイレクト
        if self.path == "/":
            self.send_response(302)
            self.send_header("Location", "/poncast.html")
            self.end_headers()
            return
        # HTMLはキャッシュ禁止（常に最新版を配信）
        if self.path.endswith(".html"):
            self.send_response(200)
            self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
            self.send_header("Pragma", "no-cache")
            path = self.translate_path(self.path)
            try:
                with open(path, "rb") as f:
                    content = f.read()
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(content)))
                self.end_headers()
                self.wfile.write(content)
            except Exception:
                self.send_error(404)
            return
        super().do_GET()

    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_POST(self):
        if self.path == "/upload":
            cl = self.headers.get("Content-Length", "なし")
            fn = self.headers.get("X-Filename", "なし")
            print(f"[POST] /upload  Content-Length={cl}  X-Filename={fn}")
            # Expect: 100-continue 対応
            if self.headers.get("Expect", "").lower() == "100-continue":
                self.send_response(100)
                self.end_headers()
                self.wfile.flush()

            cl_header = self.headers.get("Content-Length")
            if cl_header:
                data = self.rfile.read(int(cl_header))
            else:
                # chunked transfer の場合: 全データを読む
                chunks = []
                while True:
                    line = self.rfile.readline().strip()
                    if not line:
                        break
                    chunk_size = int(line, 16)
                    if chunk_size == 0:
                        break
                    chunks.append(self.rfile.read(chunk_size))
                    self.rfile.read(2)  # CRLF
                data = b"".join(chunks)

            raw_name = unquote(self.headers.get("X-Filename", "upload"))
            safe_stem = Path(raw_name).stem
            safe_ext  = Path(raw_name).suffix.lower()
            # ASCIIのみに限定（日本語・スペース・特殊文字をアンダースコアに変換）
            safe_stem = re.sub(r'[^\x00-\x7F]', '_', safe_stem)  # 非ASCII → _
            safe_stem = re.sub(r'[^\w\-]', '_', safe_stem)       # 記号・スペース → _
            safe_stem = safe_stem[:40] or 'file'                  # 長さ制限
            unique_name = f"{int(time.time()*1000)}_{safe_stem}{safe_ext}"

            uploads_dir = PUBLIC_DIR / "uploads"
            uploads_dir.mkdir(exist_ok=True)
            (uploads_dir / unique_name).write_bytes(data)
            print(f"[POST] 保存完了: {unique_name} ({len(data)} bytes)")

            resp = json.dumps({"url": f"/uploads/{unique_name}"}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.send_header("Connection", "close")
            self._cors()
            self.end_headers()
            self.wfile.write(resp)
            self.wfile.flush()
        elif self.path == "/trash":
            cl_header = self.headers.get("Content-Length")
            if not cl_header:
                self.send_response(400)
                self.end_headers()
                return
            
            try:
                data = json.loads(self.rfile.read(int(cl_header)).decode())
            except Exception:
                self.send_response(400)
                self.end_headers()
                return

            raw_filename = data.get("filename")
            if not raw_filename:
                self.send_response(400)
                self.end_headers()
                return

            # セキュリティ: パストラバーサル防止 (basenameのみ使用)
            filename = os.path.basename(raw_filename)
            
            src_path = PUBLIC_DIR / "uploads" / filename
            # セキュリティ: ゴミ箱を公開ディレクトリ(public)の外に配置
            trash_dir = PUBLIC_DIR.parent / "trash"
            trash_dir.mkdir(exist_ok=True)
            
            if src_path.exists():
                # 上書き防止: 同名ファイルがある場合はタイムスタンプを付与
                dst_path = trash_dir / filename
                if dst_path.exists():
                    stem = Path(filename).stem
                    suffix = Path(filename).suffix
                    filename = f"{stem}_{int(time.time())}{suffix}"
                    dst_path = trash_dir / filename
                
                try:
                    src_path.replace(dst_path)
                    print(f"[POST] ゴミ箱へ移動成功: {filename} (to {trash_dir})")
                    self.send_response(200)
                except Exception as e:
                    print(f"[POST] 移動失敗: {e}")
                    self.send_response(500)
            else:
                print(f"[POST] ファイルが見つかりません: {src_path}")
                self.send_response(404)
            
            self._cors()
            self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, X-Filename")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")

    def log_message(self, format, *args):
        pass  # アクセスログを抑制

# ===== WebSocket サーバー (リレー) =====
CLIENTS: weakref.WeakSet = weakref.WeakSet()

async def ws_handler(websocket):
    CLIENTS.add(websocket)
    client_ip = websocket.remote_address[0] if websocket.remote_address else "?"
    count = len(list(CLIENTS))
    print(f"[WS] 接続: {client_ip}  (合計: {count}台)")

    # 接続台数を全クライアントに通知
    broadcast_msg = json.dumps({"type": "CLIENT_COUNT", "payload": {"count": count, "ip": client_ip}})
    await asyncio.gather(*[c.send(broadcast_msg) for c in list(CLIENTS)], return_exceptions=True)

    try:
        async for raw in websocket:
            # 送信元以外の全クライアントに転送
            targets = [c for c in list(CLIENTS) if c is not websocket]
            if targets:
                await asyncio.gather(
                    *[c.send(raw) for c in targets],
                    return_exceptions=True
                )
    except Exception:
        pass
    finally:
        CLIENTS.discard(websocket)
        count = len(list(CLIENTS))
        print(f"[WS] 切断  (残り: {count}台)")
        
        # 切断後の台数を全クライアントに通知
        broadcast_msg = json.dumps({"type": "CLIENT_COUNT", "payload": {"count": count}})
        # 他のクライアントへの DISPLAY_OFFLINE 通知も兼ねる
        msg_offline = json.dumps({"type": "DISPLAY_OFFLINE", "payload": {}})

        targets = list(CLIENTS)
        if targets:
            await asyncio.gather(
                *[c.send(broadcast_msg) for c in targets],
                *[c.send(msg_offline) for c in targets],
                return_exceptions=True
            )

def run_http():
    ThreadingHTTPServer.allow_reuse_address = True
    httpd = ThreadingHTTPServer(("", PORT_HTTP), OBSHTTPHandler)
    httpd.serve_forever()

async def run_ws():
    # reuse_port は Windows (SO_REUSEPORT 非対応) では使えないため除外
    kwargs = {"reuse_address": True}
    if os.name != "nt":
        kwargs["reuse_port"] = True
    async with serve(ws_handler, "", PORT_WS, **kwargs):
        await asyncio.get_event_loop().create_future()  # run forever

async def main():
    print("")
    print("==============================================")
    print("  PONCAST 起動完了")
    print("==============================================")
    print(f"  PONCAST             : http://localhost:{PORT_HTTP}/poncast.html")
    print(f"  表示レイヤー (OBS用): http://localhost:{PORT_HTTP}/obs_display.html")
    print("----------------------------------------------")
    print("  停止するには Ctrl+C を押してください")
    print("==============================================")
    print("")

    # HTTPサーバーを別スレッドで起動
    t = threading.Thread(target=run_http, daemon=True)
    t.start()

    # WebSocketサーバーをメインスレッドで起動
    await run_ws()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nサーバーを停止しました")
