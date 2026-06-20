# 🏗 Arquitectura Técnica: Portal Turístico Global (dbv-specs-ops)

> **Fase:** `/plan` (Planificación Técnica)
> **Estado:** Validado
> **Última Revisión:** 2026-06-20

---

## 🛠 Stack Tecnológico

| Capa | Tecnología | Justificación |
| --- | --- | --- |
| **Lenguaje** | JavaScript (ES6+), HTML5, CSS3 | Nativo del navegador, rápido, sin necesidad de paso de compilación para el MVP. |
| **Biblioteca de Mapas** | Leaflet.js | Biblioteca open-source, ligera y libre de API keys comerciales. |
| **Estilos (CSS)** | Vanilla CSS3 (Custom Properties) | Máxima flexibilidad, control de animaciones de alto rendimiento y fácil mantenimiento. |
| **Tipografía** | Outfit & Inter (Google Fonts) | Combinación de tipografía de gran personalidad (Outfit para títulos) y alta legibilidad (Inter para textos). |
| **Iconografía** | Lucide Icons / SVG directos | Iconos modernos, consistentes y ligeros. |

---

## 📂 Estructura de Directorios

El proyecto se estructurará como una Single Page Application (SPA) modular:

```text
/
├── docs/                # Ficheros de metodología SDD (especificaciones, arquitectura)
│   ├── MASTER_PROMPT.md
│   ├── SPECIFICATIONS.md
│   ├── ARCHITECTURE.md
│   └── DESIGN.md
├── src/                 # Código fuente
│   ├── data.js          # Base de datos local (Destinos, Actividades, Restaurantes y respuestas del Agente)
│   ├── map.js           # Módulo de integración de mapas con Leaflet.js
│   ├── chatbot.js       # Cerebro y lógica de conversación del Agente de IA
│   └── app.js           # Orquestador de la UI, navegación y eventos del DOM
├── index.html           # Estructura HTML5 semántica principal de la SPA
├── index.css            # Estilos del sistema de diseño (Colores, Layout, Glassmorphism, Responsive)
├── project.config.md    # Identidad y metadatos de dbv-specs-ops
├── memory.md            # Registro de decisiones de arquitectura persistentes
├── task.md              # Backlog operativo y snapshots
└── LICENSE              # Licencia MIT
```

---

## 🔑 Decisiones Técnicas Clave

### Estructura de Datos (en `src/data.js`)
Consolida la información geográfica y de IA en un único archivo accesible por los módulos de la aplicación.
* **Países soportados:** Francia, Japón, España.
* **Ciudades clave:** París, Niza, Tokio, Kioto, Madrid, Barcelona.
* **Por Ciudad:**
  * Catálogo de 3 actividades destacadas (tours con nombre, precio, duración, puntuación y foto).
  * Catálogo de 3 restaurantes recomendados con coordenadas geográficas latitud/longitud para el mapa.
  * Respuestas personalizadas para el Chatbot.

### Módulo de Mapas (en `src/map.js`)
* Usa el mapa de Leaflet.js con tiles de OpenStreetMap estilizados (CartoDB Positron / Stadia Dark) para fundirse con la estética oscura premium.
* Maneja dinámicamente la creación y destrucción de la instancia del mapa al alternar de ciudad para prevenir memory leaks y problemas de re-inicialización.
* Genera marcadores interactivos que muestran tooltips y popups premium al hacer clic.

### Agente de IA Flotante (en `src/chatbot.js`)
* **Modelo local de concordancia:** Utiliza expresiones regulares e indexación semántica ligera para mapear palabras clave de la pregunta del usuario con las respuestas apropiadas de cada destino.
* **Streaming de salida:** Implementa un generador asíncrono que escribe caracteres progresivamente (efecto máquina de escribir) a una velocidad configurable para imitar el streaming de modelos generativos reales.
* **Estado Contextual:** El chatbot reconoce automáticamente la ciudad y el país activos del usuario en la interfaz para adaptar sus recomendaciones ("¿Qué tours hay aquí?", "¿Dónde puedo cenar?").

---

## 🤖 Agent Harness (Arnés del Agente)

### 1. Gestión de Contexto
* **Contexto Estático:** Cargado automáticamente mediante `GEMINI.md`, `CLAUDE.md`, `memory.md` y `task.md`.
* **Contexto Dinámico:** Los archivos fuente en `src/` están modularizados y documentados para facilitar su mantenimiento por agentes.

### 2. Guardrails de Seguridad
* Se auditará el código generado en la fase `/code-simplify` para asegurar la ausencia de tokens quemados y la correcta sanitización de las entradas de texto en el cuadro de chat del usuario para mitigar ataques de inyección XSS.
