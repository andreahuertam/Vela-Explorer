# 📋 Especificaciones: Portal Turístico Global (dbv-specs-ops)

> **Fase:** `/spec` (Especificación)
> **Estado:** Validado
> **Última Revisión:** 2026-06-20

---

## 🎯 1. Contexto y Objetivos
*Basado en la filosofía de "entender el problema antes de proponer la solución".*

- **Problema:** [CONFIRMADO] Los viajeros que visitan un portal turístico a menudo se encuentran con interfaces fragmentadas donde deben buscar ciudades en un lugar, consultar tours en otro, usar un mapa externo (como Google Maps) para ubicar restaurantes, y buscar información de soporte en secciones de FAQ obsoletas.
- **Objetivo (Éxito):** [CONFIRMADO] Desarrollar un portal turístico de clase mundial con diseño premium, interactivo y unificado en una SPA. El portal permitirá explorar de manera fluida países y sus principales ciudades, ver actividades turísticas destacadas, consultar un mapa interactivo (usando Leaflet.js libre de API keys) con restaurantes de alta valoración, y realizar preguntas en tiempo real a un Agente de IA integrado directamente en la interfaz.

## 👥 2. Usuarios y Escenarios
*Identifica para quién construimos y en qué situaciones usarán el sistema.*

- **Perfil de Usuario:** Turistas internacionales, planificadores de viajes y usuarios casuales que buscan explorar opciones de actividades y restauración de manera visual y ágil.
- **Escenarios Clave:**
  - *Escenario A:* [CONFIRMADO] El usuario quiere planificar su día en París. Entra al portal, selecciona Francia -> París, ve los tours disponibles (como la visita a la Torre Eiffel), ubica en el mapa integrado un bistró altamente valorado en el barrio y le pregunta al chatbot interno: "¿Cuál es el mejor momento para visitar la Torre Eiffel?". El chatbot responde en tiempo real con recomendaciones útiles.
  - *Escenario B:* [CONFIRMADO] Un usuario móvil quiere ver qué hacer en Tokio rápidamente. Accede a la web optimizada y responsiva, navega por las actividades y encuentra restaurantes destacados usando el mapa interactivo.

## ✨ 3. Funcionalidades Principales (Requisitos)

- [ ] **F1: Selector Interactivo de Países y Ciudades:**
  - Navegación fluida de destinos (Mínimo 3 países con 2 ciudades clave por país).
  - Filtrado y búsqueda instantánea de destinos en el Hero principal.
- [ ] **F2: Catálogo de Actividades y Tours:**
  - Tarjetas de actividades turísticas con: imagen descriptiva, nombre, descripción breve, duración, costo aproximado y puntuación de usuarios.
  - Micro-interacciones (efectos hover, modal/vista detallada de la actividad).
- [ ] **F3: Mapa de Restaurantes Recomendados:**
  - Integración de mapa interactivo basado en Leaflet.js.
  - Marcadores de restaurantes mejor valorados en la ciudad seleccionada.
  - Popups personalizados en el mapa con foto, nombre, tipo de comida, precio y valoración del restaurante.
- [ ] **F4: Agente de IA Flotante (Chatbot):**
  - Interfaz de conversación persistente (widget de chat en la esquina inferior derecha o panel lateral).
  - Simulación de respuesta en tiempo real (streaming/efecto máquina de escribir).
  - Motor de NLP básico/local capaz de responder con precisión preguntas específicas sobre los destinos cargados (clima, tours recomendados, comida típica, consejos de viaje) y ofrecer sugerencias de preguntas rápidas.
  - Respuestas fluidas y personalizadas según el destino activo del usuario.

## 🏗️ 4. Propuesta de Solución Técnica (Resumen)
*Enlace directo con ARCHITECTURE.md.*

- **Enfoque:** Single Page Application (SPA) responsiva e interactiva construida con HTML5 semántico, Vanilla CSS3 (efectos de glassmorphism, gradientes, CSS variables y animaciones nativas) y Vanilla JavaScript (ES6+) estructurado en módulos para la lógica del catálogo, el mapa y el agente.
- **Dependencias Críticas:** Leaflet.js (CSS y JS desde CDN oficial) para renderizar mapas sin requerir API keys comerciales ni backend complejo. Google Fonts para tipografía premium.
- **Oportunidades de Skills y MCPs**: En este proyecto SPA, la lógica de conocimiento del bot se cargará de manera estructurada en un módulo local para optimizar el rendimiento y la fidelidad del prototipo.
- **Sistema de Diseño:** Consultar `docs/DESIGN.md` para las definiciones de colores HSL, tipografía, espaciado y tokens de diseño interactivos.

### 4.1. Agent Readiness Checklist (Proyectos Web)
- **Agent Readiness (Web):** Desactivado en `project.config.md` ya que es una aplicación cliente local, pero estructuramos el código con alta semántica HTML5 para que cualquier agente lector lo comprenda perfectamente.

## 🚫 5. Fuera de Alcance (Out of Scope)
- [CONFIRMADO] Integración con pasarelas de pago reales para comprar los tours.
- [CONFIRMADO] Integración con servicios API de mapas de pago (Google Maps, Mapbox) o servidores de backend de bases de datos.
- [CONFIRMADO] Conectores de APIs de LLM comerciales (OpenAI, Anthropic) para el chatbot, evitando costos adicionales de API Key y facilitando una ejecución local inmediata e interactiva. El chatbot usará un motor de IA/NLP simulado local en JS de alta fidelidad.

## ⚠️ 6. Riesgos y Mitigación
- **Riesgo:** Limitación de recursos en cliente al cargar Leaflet.js con múltiples marcadores y assets de imágenes pesados.
  - **Mitigación:** Carga diferida (lazy load) de las vistas, uso de imágenes optimizadas de Unsplash para tours/ciudades y control del ciclo de vida del mapa destruyendo/reconstruyendo instancias al cambiar de ciudad.
- **Riesgo:** El chatbot local puede parecer repetitivo si el usuario hace preguntas fuera de contexto.
  - **Mitigación:** Proveer "preguntas sugeridas dinámicas" según la ciudad activa y respuestas predeterminadas educadas e ingeniosas para preguntas no reconocidas.

## ❓ 7. Preguntas Abiertas
- Ninguna por el momento. La especificación cubre los requisitos dados por el usuario.

## 🧪 8. Criterios de Evaluación y Evals (No Deterministas)
- [ ] **Métricas del Chatbot:** Validación del flujo de conversación, autocompletado y asertividad de las respuestas de IA mockeadas en base a la ciudad seleccionada.