#!/bin/bash
# =============================================================================
# dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
# Copyright (c) 2026 Andrea Huerta
# Licensed under the MIT License. See LICENSE for details.
# Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
# =============================================================================

PORT=8000
echo "Iniciando servidor web local para el Portal Turístico en el puerto $PORT..."

# Levantar el servidor en segundo plano
if command -v python3 &>/dev/null; then
  python3 -m http.server $PORT &
  PID=$!
elif command -v python &>/dev/null; then
  python -m http.server $PORT &
  PID=$!
elif command -v npx &>/dev/null; then
  npx -y http-server -p $PORT &
  PID=$!
else
  echo "Error: Se requiere Python o Node.js para ejecutar el servidor de desarrollo local."
  exit 1
fi

echo $PID > .server.pid
echo "Servidor iniciado con PID $PID."

# Esperar un momento a que levante el socket
sleep 1

# Abrir el navegador según el sistema operativo
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "http://localhost:$PORT"
else
  xdg-open "http://localhost:$PORT" 2>/dev/null || sensible-browser "http://localhost:$PORT" 2>/dev/null || echo "Por favor, abre http://localhost:$PORT en tu navegador."
fi
