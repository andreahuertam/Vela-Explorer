# =============================================================================
# dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
# Copyright (c) 2026 Andrea Huerta
# Licensed under the MIT License. See LICENSE for details.
# Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
# =============================================================================

import re
import os
import sys

def test_files_exist():
    required_files = [
        "index.html",
        "index.css",
        "src/data.js",
        "src/map.js",
        "src/chatbot.js",
        "src/app.js",
        "start.sh",
        "stop.sh",
        "start.cmd",
        "stop.cmd"
    ]
    print("=== Verificando existencia de archivos ===")
    all_exist = True
    for f in required_files:
        exists = os.path.exists(f)
        status = "[PASS]" if exists else "[FAIL]"
        print(f"{status} Fichero: {f}")
        if not exists:
            all_exist = False
    return all_exist

def test_js_headers():
    print("\n=== Verificando cabeceras en archivos ===")
    js_files = ["src/data.js", "src/map.js", "src/chatbot.js", "src/app.js", "tests/run_tests.py"]
    header_pattern = "Built with dbv-specs-ops"
    all_headers_valid = True
    
    for f in js_files:
        if not os.path.exists(f):
            continue
        with open(f, "r", encoding="utf-8") as file:
            content = file.read()
            has_header = header_pattern in content
            status = "[PASS]" if has_header else "[FAIL]"
            print(f"{status} Cabecera en: {f}")
            if not has_header:
                all_headers_valid = False
    return all_headers_valid

def test_data_integrity():
    print("\n=== Verificando integridad de datos en data.js ===")
    with open("src/data.js", "r", encoding="utf-8") as file:
        content = file.read()
    
    # Verificar países y ciudades clave en minúsculas
    countries = ["francia", "japon", "espana", "mexico", "alemania", "colombia", "argentina", "brasil", "portugal", "marruecos", "italia"]
    cities = [
        "paris", "niza", "tokio", "kioto", "madrid", "barcelona",
        "ciudad_de_mexico", "cancun", "berlin", "munich", "cartagena", "medellin",
        "buenos_aires", "bariloche", "rio", "sao_paulo", "lisboa", "oporto",
        "marrakech", "fez", "roma", "florencia"
    ]
    
    all_data_valid = True
    for c in countries:
        has_c = c in content.lower()
        status = "[PASS]" if has_c else "[FAIL]"
        print(f"{status} Registro de país: {c}")
        if not has_c:
            all_data_valid = False
            
    for city in cities:
        has_city = city in content.lower()
        status = "[PASS]" if has_city else "[FAIL]"
        print(f"{status} Registro de ciudad: {city}")
        if not has_city:
            all_data_valid = False
            
    return all_data_valid

if __name__ == "__main__":
    success = True
    if not test_files_exist():
        success = False
    if not test_js_headers():
        success = False
    if not test_data_integrity():
        success = False
        
    print("\n================ Resumen ================")
    if success:
        print("¡Todas las pruebas pasaron con éxito!")
        sys.exit(0)
    else:
        print("Hubo fallos en la suite de pruebas.")
        sys.exit(1)
