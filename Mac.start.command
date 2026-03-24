#!/bin/bash
# OBS テロップシステム 起動スクリプト (Mac用 ダブルクリックで起動)
cd "$(dirname "$0")"

# Python3 の確認
if ! command -v python3 &> /dev/null; then
  osascript -e 'display alert "Python3 not found" message "macOS comes with Python3 by default.\nPlease update your OS or install from https://www.python.org." as critical'
  exit 1
fi

# websockets ライブラリの確認・インストール
if ! python3 -c "import websockets" 2>/dev/null; then
  echo "Installing 'websockets' library..."
  pip3 install websockets --break-system-packages
  echo ""
fi

# 既存プロセスを強制終了（ポート 5500 / 5501）
echo "Stopping existing server processes..."
lsof -ti :5500 | xargs kill -9 2>/dev/null
lsof -ti :5501 | xargs kill -9 2>/dev/null
sleep 0.5

# Chrome の --app モードで開く（URL バーなしフローティングウィンドウ）
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CHROME_CANARY="/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
CHROMIUM="/Applications/Chromium.app/Contents/MacOS/Chromium"
URL="http://localhost:5500/poncast.html"

# サーバーをバックグラウンドで起動し完全切り離し
nohup python3 src/server.py > /tmp/poncast_server.log 2>&1 &
SERVER_PID=$!
disown $SERVER_PID
echo $SERVER_PID > /tmp/poncast_server.pid
echo "PonCast server started (PID: $SERVER_PID)"

# Chrome を遅延起動（サーバー準備待ち）
sleep 1.5
if   [ -f "$CHROME" ];        then
  nohup "$CHROME" --app="$URL" --window-size=960,640 --window-position=100,50 > /dev/null 2>&1 &
  disown
elif [ -f "$CHROME_CANARY" ]; then
  nohup "$CHROME_CANARY" --app="$URL" --window-size=960,640 --window-position=100,50 > /dev/null 2>&1 &
  disown
elif [ -f "$CHROMIUM" ];      then
  nohup "$CHROMIUM" --app="$URL" --window-size=960,640 --window-position=100,50 > /dev/null 2>&1 &
  disown
else
  open "$URL"
fi

# すべてのバックグラウンドジョブを切り離してからスクリプト終了
# → Terminal は「実行中プロセスなし」と判断してダイアログなしで閉じる
disown -a
