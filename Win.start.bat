@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo PonCast Launcher (Windows)

:: Python3 の確認
where python > nul 2>&1
if %ERRORLEVEL% neq 0 (
  echo [ERROR] Python not found. Please install from https://www.python.org.
  pause
  exit /b 1
)

:: websockets ライブラリの確認・インストール
python -c "import websockets" > nul 2>&1
if %ERRORLEVEL% neq 0 (
  echo Installing 'websockets' library...
  pip install websockets
)

:: 既存プロセスを終了（ポート 5500 / 5501）
echo Stopping existing server processes...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":5500 "') do (
  taskkill /F /PID %%a > nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":5501 "') do (
  taskkill /F /PID %%a > nul 2>&1
)
timeout /t 1 /nobreak > nul

:: サーバーをバックグラウンドで起動し、PID を保存
echo Starting PonCast server...
start /B "" python src/server.py > "%TEMP%\poncast_server.log" 2>&1

:: PID を取得して保存（直近起動の python プロセス）
for /f "tokens=2" %%i in ('tasklist /fi "imagename eq python.exe" /fo list ^| findstr "PID"') do (
  set PID=%%i
)
echo %PID% > "%TEMP%\poncast_server.pid"
echo PonCast server started (PID: %PID%)

:: Chrome でアプリモード起動（少し待ってから）
timeout /t 2 /nobreak > nul
set URL=http://localhost:5500/poncast.html
set CHROME="%ProgramFiles%\Google\Chrome\Application\chrome.exe"
set CHROME_X86="%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"

if exist %CHROME% (
  start "" %CHROME% --app="%URL%" --window-size=960,640 --window-position=100,50
) else if exist %CHROME_X86% (
  start "" %CHROME_X86% --app="%URL%" --window-size=960,640 --window-position=100,50
) else (
  start "" "%URL%"
)

exit
