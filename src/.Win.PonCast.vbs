' PonCast 起動スクリプト (Windows - コンソール非表示)
' このファイルをダブルクリックすると、コマンドプロンプトなしで PonCast が起動します

Dim WshShell, fso, scriptDir
Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

' このファイルが置かれているフォルダを取得
scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)

' Win.start.bat をコンソール非表示（0）で実行
WshShell.Run """" & scriptDir & "\..\Win.start.bat""", 0, False

Set WshShell = Nothing
Set fso = Nothing
