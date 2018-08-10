@echo off

:ask_ready
SET /P "ready=Publish to NPM and Github (yes)?"
IF "%ready%" equ "yes" goto :ready
exit

:ready
SET /P "version=Version (including v)?"

echo Updaing version...
start /wait npm version %version%

:bulding
echo ####################
echo Starting build...
start /wait npm run build
echo Build complete!

echo Preparing bulding...
mkdir release
mkdir release\yeti-table

echo Bulding...
copy .\dist\*.js .\release\yeti-table
copy .\dist\*.d.ts .\release\yeti-table
copy .\package.json .\release\yeti-table
copy .\README.md .\release\yeti-table
copy .\LICENSE .\release\yeti-table

echo Complete!
echo ####################

echo Sure to publish?
timeout /t 10

:publish
echo ####################
echo Publishing...

echo Pushing to git...
git add dist/*
git commit -m "%version%"
git push

echo Publish to NPM...
start /wait npm publish release\yeti-table -m "%version%"

echo Complete!
echo ####################

echo.
echo Cleanup...
rmdir /s /q release\yeti-table
rmdir /s /q release\
