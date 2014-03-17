SET mypath=%~dp0
echo %mypath:~0,-1%

compass watch %mypath:~0,-1%
break