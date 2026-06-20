# 🎨 Sistema de Diseño Visual: Portal Turístico Global (dbv-specs-ops)

> **Fase:** `/spec` (Especificación Visual)
> **Estado:** Validado
> **Última Revisión:** 2026-06-20

---

## 🎨 Paleta de Colores (HSL Tailored)

Para lograr una estética moderna y premium de nivel internacional, utilizaremos una paleta oscura sofisticada combinada con acentos de color vibrantes e inspiradores.

```css
:root {
  /* Fondos y Superficies */
  --bg-primary: hsl(220, 20%, 8%);      /* Fondo profundo de la aplicación */
  --bg-secondary: hsl(220, 16%, 12%);   /* Fondo de secciones secundarias */
  --surface: hsl(220, 14%, 16%);        /* Tarjetas, paneles y modales */
  --surface-hover: hsl(220, 14%, 22%);  /* Estado hover de tarjetas */
  --border-color: hsl(220, 12%, 22%);   /* Bordes sutiles y separadores */

  /* Colores de Acento */
  --accent-ocean: hsl(192, 95%, 48%);   /* Azul océano para botones activos, enlaces y focus */
  --accent-gradient: linear-gradient(135deg, hsl(192, 95%, 48%), hsl(220, 90%, 56%));
  --accent-gold: hsl(43, 96%, 56%);     /* Dorado premium para calificaciones y medallas */
  
  /* Textos */
  --text-primary: hsl(220, 10%, 96%);   /* Títulos y textos principales */
  --text-secondary: hsl(220, 8%, 70%);  /* Descripciones y subtítulos */
  --text-muted: hsl(220, 6%, 50%);       /* Fechas, metadatos e iconos secundarios */

  /* Efecto Glassmorphism */
  --glass-bg: hsla(220, 20%, 8%, 0.7);
  --glass-border: hsla(220, 10%, 96%, 0.08);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  --glass-blur: blur(16px);
}
```

---

## 🔤 Tipografía y Jerarquía

Utilizaremos Google Fonts para importar dos familias tipográficas:
* **Outfit:** Utilizada exclusivamente para encabezados (`h1`, `h2`, `h3`) por su carácter geométrico, moderno y elegante.
* **Inter:** Utilizada para textos de párrafos, etiquetas, tablas, botones y el chat, debido a su excelente legibilidad en pantallas digitales de cualquier tamaño.

```css
/* Escala de fuentes sugerida */
h1 { font-family: 'Outfit', sans-serif; font-size: 2.5rem; font-weight: 700; letter-spacing: -0.02em; }
h2 { font-family: 'Outfit', sans-serif; font-size: 1.8rem; font-weight: 600; letter-spacing: -0.01em; }
h3 { font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 600; }
body, input, button { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 400; line-height: 1.5; }
```

---

## 🏗️ Componentes de UI e Interacciones

### 1. Cabecera (Header)
* **Estilo:** Transparente con fondo glassmorphism cuando se hace scroll.
* **Elementos:** Logo premium (con icono de compás o mundo en SVG), enlaces de países rápidos y un indicador del destino activo.

### 2. Destinos e Explorer Grid
* **Tarjetas de Ciudades/Actividades:**
  * **Efectos:** Sombras profundas en reposo, elevación sutil (`transform: translateY(-5px)`) y borde de acento en hover.
  * **Imágenes:** Gradiente de oscuro a transparente overlay en la base para asegurar legibilidad del texto de título.
  * **Calificaciones:** Visualización de estrellas en dorado con la puntuación (ej: `⭐ 4.9`).

### 3. Mapa Interactivo (Leaflet.js)
* **Contenedor:** Esquinas redondeadas (`border-radius: 16px`), borde sutil y sombra.
* **Estilo del mapa:** Cargará tiles de tipo 'CartoDB Positron' o similar de bajo contraste para no romper la estética oscura.
* **Popups:** Fondo oscuro personalizado con el diseño del portal.

### 4. Widget de Chat (Agente de IA)
* **Botón Flotante:** Círculo con gradiente ocean y sombra pronunciada, con micro-animación de pulso discreto.
* **Ventana de Conversación:**
  * **Estructura:** Encabezado con estado del agente ("En línea" con un led verde animado), lista de mensajes scrollable y caja de entrada de texto.
  * **Efecto de Entrada:** Mensajes que aparecen con una animación suave de desvanecimiento y deslizamiento hacia arriba (`fade-in-up`).
  * **Preguntas Sugeridas:** Etiquetas con bordes redondeados (`pill buttons`) que permiten enviar preguntas comunes al bot con un solo clic.

---

## 💫 Micro-Animaciones y Transiciones

* **Transiciones globales:** `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);` para botones, enlaces y tarjetas.
* **Efecto de Carga (Skeleton/Spinner):** Un sutil shimmer o indicador circular de acento azul océano cuando se carga una nueva ciudad o se procesa la respuesta del chatbot.
* **Typing Indicator (Animación del Chat):** Tres puntos rebotando rítmicamente en el globo del agente mientras "escribe" la respuesta.
