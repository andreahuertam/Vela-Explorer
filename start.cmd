:: =============================================================================
:: dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
:: Copyright (c) 2026 Andrea Huerta
:: Licensed under the MIT License. See LICENSE for details.
:: Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
:: =============================================================================
@echo off
set PORT=8000
echo Iniciando servidor de desarrollo en puerto %PORT%...

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    start /B python -m http.server %PORT%
    echo Servidor iniciado en segundo plano con Python.
    goto open_browser
)

where python3 >nul 2>nul
if %ERRORLEVEL% equ 0 (
    start /B python3 -m http.server %PORT%
    echo Servidor iniciado en segundo plano con Python3.
    goto open_browser
)

where npx >nul 2>nul
if %ERRORLEVEL% equ 0 (
    start /B npx http-server -p %PORT%
    echo Servidor iniciado en segundo plano con Node/npx.
    goto open_browser
)

echo Error: Se requiere Python o Node.js para ejecutar el servidor local.
pause
exit /b 1

:open_browser
timeout /t 1 /nobreak >nul
start http://localhost:%PORT%
