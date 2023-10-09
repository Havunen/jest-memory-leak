@ECHO OFF
PUSHD .
FOR /R %%d IN (.) DO (
cd "%%d"
IF EXIST *.js (
REN *.js *.spec.js
)
)
POPD
