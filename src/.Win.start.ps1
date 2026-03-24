# PONCAST 起動スクリプト (Windows PowerShell用)
# 実行ポリシーでブロックされる場合: PowerShell を右クリック → 管理者として実行し
#   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Set-Location -Path $PSScriptRoot

# Python の確認
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    [System.Windows.Forms.MessageBox]::Show(
        "Python not found.`nInstall from https://www.python.org.",
        "PONCAST Error", 0, 16) | Out-Null
    exit 1
}

# websockets ライブラリの確認・インストール
python -c "import websockets" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Installing 'websockets' library..."
    pip install websockets
    Write-Host ""
}

# 既存プロセスを強制終了（ポート 5500 / 5501）
Write-Host "Stopping existing server processes..."
@(5500, 5501) | ForEach-Object {
    $port = $_
    $connections = netstat -ano | Select-String ":$port "
    foreach ($line in $connections) {
        $pid = ($line -split '\s+')[-1]
        if ($pid -match '^\d+$') {
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        }
    }
}

# Chrome を --app モードで開く
$chromePaths = @(
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "$env:LocalAppData\Google\Chrome\Application\chrome.exe"
)
$url = "http://localhost:5500/poncast.html"
$chrome = $chromePaths | Where-Object { Test-Path $_ } | Select-Object -First 1

Start-Sleep -Milliseconds 1500
if ($chrome) {
    Start-Process $chrome -ArgumentList "--app=`"$url`"", "--window-size=960,640", "--window-position=100,50"
} else {
    Start-Process $url
}

# サーバー起動
python server.py
