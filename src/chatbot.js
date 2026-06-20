// =============================================================================
// dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
// Copyright (c) 2026 Andrea Huerta
// Licensed under the MIT License. See LICENSE for details.
// Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
// =============================================================================

import { CHATBOT_RESPONSES } from "./data.js";

let currentCityGetter = null;
let isChatExpanded = false;
let isBotTyping = false;

/**
 * Inicializa el widget de Chatbot flotante y sus eventos.
 * @param {Function} getActiveCity - Función callback que retorna la ciudad activa.
 */
export function initChatbot(getActiveCity) {
  currentCityGetter = getActiveCity;

  const chatToggle = document.getElementById("chat-toggle");
  const chatWindow = document.getElementById("chat-window");
  const chatClose = document.getElementById("chat-close");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  
  if (!chatToggle || !chatWindow || !chatForm || !chatInput) return;

  // Toggle expandir/colapsar
  chatToggle.addEventListener("click", () => {
    toggleChatWindow(true);
  });

  chatClose.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleChatWindow(false);
  });

  // Envío de formulario
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query || isBotTyping) return;
    
    chatInput.value = "";
    handleUserMessage(query);
  });

  // Inicializar saludo y sugerencias iniciales
  addBotMessage(CHATBOT_RESPONSES.global.saludo);
  updateSuggestions();
}

/**
 * Muestra u oculta la ventana del chat.
 * @param {boolean} show - True para mostrar, false para ocultar.
 */
export function toggleChatWindow(show) {
  const chatWindow = document.getElementById("chat-window");
  const chatToggle = document.getElementById("chat-toggle");
  if (!chatWindow || !chatToggle) return;

  isChatExpanded = show;

  if (show) {
    chatWindow.classList.add("expanded");
    chatToggle.classList.add("hidden");
    // Foco en input
    setTimeout(() => {
      document.getElementById("chat-input")?.focus();
    }, 300);
  } else {
    chatWindow.classList.remove("expanded");
    chatToggle.classList.remove("hidden");
  }
}

/**
 * Actualiza las sugerencias de preguntas rápidas según la ciudad activa.
 */
export function updateSuggestions() {
  const container = document.getElementById("chat-suggestions");
  if (!container) return;

  const activeCity = currentCityGetter ? currentCityGetter() : null;
  container.innerHTML = "";

  const suggestions = activeCity 
    ? [
        `¿Qué tours hay en ${activeCity.name}?`,
        `¿Dónde comer en ${activeCity.name}?`,
        `¿Cómo es el clima en ${activeCity.name}?`,
        `Dame un consejo para visitar ${activeCity.name}`
      ]
    : [
        "¿Qué ciudades puedo visitar?",
        "¿Cuáles son los mejores tours?",
        "¿Dónde hay restaurantes recomendados?",
        "¿Qué países están disponibles?"
      ];

  suggestions.forEach(text => {
    const pill = document.createElement("button");
    pill.className = "suggestion-pill";
    pill.textContent = text;
    pill.addEventListener("click", () => {
      if (isBotTyping) return;
      handleUserMessage(text);
    });
    container.appendChild(pill);
  });
}

/**
 * Procesa el mensaje enviado por el usuario.
 * @param {string} text - Texto del mensaje.
 */
function handleUserMessage(text) {
  addUserMessage(text);
  
  // Mostrar indicador de escritura
  showTypingIndicator();

  // Simular latencia de red y procesamiento (1.5 segundos)
  setTimeout(() => {
    const responseText = processQuery(text);
    removeTypingIndicator();
    addBotMessageWithStreaming(responseText);
  }, 1200);
}

/**
 * Clasifica la consulta y retorna la respuesta predefinida correspondiente.
 * @param {string} query - Consulta del usuario.
 * @returns {string} Respuesta.
 */
function processQuery(query) {
  const normalizedQuery = query.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // Quitar acentos

  const activeCity = currentCityGetter ? currentCityGetter() : null;

  // Buscar coincidencia en los patrones
  for (const patron of CHATBOT_RESPONSES.patrones) {
    const match = patron.keywords.some(kw => normalizedQuery.includes(kw));
    if (match) {
      return patron.response(activeCity);
    }
  }

  // Fallbacks basados en preguntas genéricas de países
  if (normalizedQuery.includes("ciudad") || normalizedQuery.includes("destino") || normalizedQuery.includes("pais")) {
    return "En nuestro portal puedes explorar destinos excepcionales en **Francia** (París y Niza), **Japón** (Tokio y Kioto) y **España** (Madrid y Barcelona). Solo haz clic en las pestañas superiores para cambiar de país.";
  }

  // Fallback si no comprende
  if (activeCity) {
    return `Lo siento, no he entendido esa pregunta para **${activeCity.name}**. Prueba preguntándome sobre "tours", "restaurantes", "clima" o pidiéndome un "consejo de viaje".`;
  }

  return CHATBOT_RESPONSES.global.desconocido;
}

/**
 * Agrega un mensaje del usuario al chat.
 */
function addUserMessage(text) {
  const messagesBody = document.getElementById("chat-messages");
  if (!messagesBody) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-message user-message";
  msgDiv.innerHTML = `<div class="message-content">${escapeHTML(text)}</div>`;
  messagesBody.appendChild(msgDiv);
  scrollToBottom();
}

/**
 * Agrega un mensaje directo del bot (ej: saludo inicial).
 */
function addBotMessage(text) {
  const messagesBody = document.getElementById("chat-messages");
  if (!messagesBody) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-message bot-message";
  msgDiv.innerHTML = `<div class="message-content">${formatMarkdown(text)}</div>`;
  messagesBody.appendChild(msgDiv);
  scrollToBottom();
}

/**
 * Agrega un mensaje del bot simulando escritura en tiempo real.
 */
function addBotMessageWithStreaming(text) {
  const messagesBody = document.getElementById("chat-messages");
  if (!messagesBody) return;

  isBotTyping = true;
  const msgDiv = document.createElement("div");
  msgDiv.className = "chat-message bot-message";
  
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  msgDiv.appendChild(contentDiv);
  messagesBody.appendChild(msgDiv);

  let charIndex = 0;
  const speed = 15; // ms por carácter

  function typeNextChar() {
    if (charIndex < text.length) {
      // Escribir texto progresivamente
      const subText = text.substring(0, charIndex + 1);
      contentDiv.innerHTML = formatMarkdown(subText);
      charIndex++;
      scrollToBottom();
      setTimeout(typeNextChar, speed);
    } else {
      isBotTyping = false;
    }
  }

  typeNextChar();
}

/**
 * Muestra la animación de "escribiendo..."
 */
function showTypingIndicator() {
  const messagesBody = document.getElementById("chat-messages");
  if (!messagesBody) return;

  const indicator = document.createElement("div");
  indicator.id = "typing-indicator";
  indicator.className = "chat-message bot-message typing-indicator";
  indicator.innerHTML = `
    <div class="message-content">
      <div class="dots-container">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  `;
  messagesBody.appendChild(indicator);
  scrollToBottom();
}

/**
 * Remueve la animación de "escribiendo..."
 */
function removeTypingIndicator() {
  const indicator = document.getElementById("typing-indicator");
  if (indicator) {
    indicator.remove();
  }
}

/**
 * Hace scroll automático hacia el final del chat.
 */
function scrollToBottom() {
  const messagesBody = document.getElementById("chat-messages");
  if (messagesBody) {
    messagesBody.scrollTop = messagesBody.scrollHeight;
  }
}

/**
 * Escapa HTML para prevenir ataques XSS elementales en inputs del usuario.
 */
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/**
 * Formateador de Markdown super ligero para negritas y listas.
 */
function formatMarkdown(text) {
  let html = escapeHTML(text);
  
  // Formatear negritas: **texto** -> <strong>texto</strong>
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  
  // Formatear viñetas: - texto -> <li>texto</li> agrupados en <ul>
  if (html.includes("\n- ")) {
    const lines = html.split("\n");
    let inList = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("- ") || lines[i].startsWith("&lt;li&gt;") || lines[i].startsWith(" - ")) {
        let cleanLine = lines[i].replace(/^[\s]*- /, "");
        lines[i] = (inList ? "" : '<ul class="chat-list">') + `<li>${cleanLine}</li>`;
        inList = true;
      } else if (inList) {
        lines[i] = "</ul>" + lines[i];
        inList = false;
      }
    }
    if (inList) {
      lines.push("</ul>");
    }
    html = lines.join("\n");
  }

  // Saltos de línea
  html = html.replace(/\n/g, "<br>");
  
  return html;
}
