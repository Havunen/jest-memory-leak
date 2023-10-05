@ECHO OFF
PUSHD .
FOR /R %%d IN (.) DO (
cd "%%d"
IF EXIST *.ts (
REN *.ts *.spec.js
)
)
POPD
