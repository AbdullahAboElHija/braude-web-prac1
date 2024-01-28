:: this bat file is used to set git repository
:: to run use .\set_git.bat
@echo off
:: add :: before the next row to initialize the repository
@REM exit /b

git init
git add .
git commit -m "Tir2"
git branch -M main
git remote add origin https://github.com/AbdullahAboElHija/braude-web-prac1.git
git push -u origin main