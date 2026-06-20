:: =============================================================================
:: dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
:: Copyright (c) 2026 Andrea Huerta
:: Licensed under the MIT License. See LICENSE for details.
:: Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
:: =============================================================================
@echo off
echo Deteniendo el servidor de desarrollo local...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8000') do (
    taskkill /F /PID %%a 2>nul
)
echo Servidor en el puerto 8000 detenido correctamente (si estaba activo).
