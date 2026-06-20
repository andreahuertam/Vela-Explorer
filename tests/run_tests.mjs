// =============================================================================
// dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
// Copyright (c) 2026 Andrea Huerta
// Licensed under the MIT License. See LICENSE for details.
// Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
// =============================================================================

import { TOURISM_DATA, CHATBOT_RESPONSES } from "../src/data.js";

let assertionsCount = 0;
let failuresCount = 0;

function assert(condition, message) {
  assertionsCount++;
  if (condition) {
    console.log(`[PASS] ${message}`);
  } else {
    failuresCount++;
    console.error(`[FAIL] ${message}`);
  }
}

console.log("=== Ejecutando Suite de Pruebas: Portal Turístico Global ===");

// 1. Validar Estructura de Datos
assert(TOURISM_DATA !== undefined, "La base de datos TOURISM_DATA debe estar definida.");
assert(Object.keys(TOURISM_DATA).length === 3, "Deberían estar registrados exactamente 3 países.");
assert(TOURISM_DATA.francia !== undefined, "Francia debe existir en los destinos.");
assert(TOURISM_DATA.japon !== undefined, "Japón debe existir en los destinos.");
assert(TOURISM_DATA.espana !== undefined, "España debe existir en los destinos.");

// Verificar París
const paris = TOURISM_DATA.francia.cities.paris;
assert(paris !== undefined, "París debe estar registrada en Francia.");
assert(paris.tours.length === 3, "París debe tener exactamente 3 tours.");
assert(paris.restaurants.length === 3, "París debe tener exactamente 3 restaurantes.");
assert(paris.coords.length === 2, "París debe tener coordenadas [lat, lng].");

// 2. Validar Lógica del Chatbot (NLP y Respuestas)
const dummyGetter = () => paris;

function simulateProcessQuery(query) {
  const normalizedQuery = query.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const activeCity = dummyGetter();

  for (const patron of CHATBOT_RESPONSES.patrones) {
    const match = patron.keywords.some(kw => normalizedQuery.includes(kw));
    if (match) {
      return patron.response(activeCity);
    }
  }
  return CHATBOT_RESPONSES.global.desconocido;
}

// Probar respuestas del bot
const saludoMsg = simulateProcessQuery("Hola, buenos días!");
assert(saludoMsg.includes("París") && saludoMsg.includes("saludar"), "La respuesta al saludo debe incluir la ciudad París.");

const comidaMsg = simulateProcessQuery("¿Dónde puedo cenar o comer algo rico?");
assert(comidaMsg.includes("Le Jules Verne") && comidaMsg.includes("Septime"), "La respuesta de comer en París debe listar los restaurantes locales.");

const toursMsg = simulateProcessQuery("¿Cuáles son las excursiones o tours disponibles?");
assert(toursMsg.includes("Torre Eiffel") && toursMsg.includes("Museo del Louvre"), "La respuesta de tours en París debe listar las actividades locales.");

const climaMsg = simulateProcessQuery("¿Qué tiempo o clima hace en París?");
assert(climaMsg.includes("templado") && climaMsg.includes("primavera"), "La respuesta de clima debe retornar la información correcta.");

const consejoMsg = simulateProcessQuery("Dame una recomendación o consejo.");
assert(consejoMsg.includes("metro") && consejoMsg.includes("Navigo"), "La respuesta de consejo debe retornar la información de transporte correcta.");

const desconocidoMsg = simulateProcessQuery("¿Cuál es la fórmula de la relatividad?");
assert(desconocidoMsg === CHATBOT_RESPONSES.global.desconocido, "Las preguntas fuera del dominio deben retornar el mensaje predeterminado.");

console.log("\n================ Resumen ================");
console.log(`Pruebas totales ejecutadas: ${assertionsCount}`);
console.log(`Aprobadas: ${assertionsCount - failuresCount}`);
console.log(`Fallidas: ${failuresCount}`);

if (failuresCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
