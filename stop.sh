#!/bin/bash
# =============================================================================
# dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
# Copyright (c) 2026 Andrea Huerta
# Licensed under the MIT License. See LICENSE for details.
# Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
# =============================================================================

if [ -f .server.pid ]; then
  PID=$(cat .server.pid)
  echo "Deteniendo servidor local con PID $PID..."
  kill $PID 2>/dev/null
  rm .server.pid
  echo "Servidor detenido correctamente."
else
  echo "No se encontró ningún archivo .server.pid indicando un servidor activo."
fi
