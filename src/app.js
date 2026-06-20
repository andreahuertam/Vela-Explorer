// =============================================================================
// dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
// Copyright (c) 2026 Andrea Huerta
// Licensed under the MIT License. See LICENSE for details.
// Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
// =============================================================================

import { TOURISM_DATA } from "./data.js";
import { updateMap } from "./map.js";
import { initChatbot, updateSuggestions } from "./chatbot.js";

// Estado de la aplicación
// Seleccionar por defecto el primer país y su primera ciudad disponibles en los datos
let activeCountryKey = Object.keys(TOURISM_DATA)[0] || "francia";
let activeCityKey = (() => {
  const country = TOURISM_DATA[activeCountryKey];
  return country ? Object.keys(country.cities)[0] : "paris";
})();

/**
 * Obtiene los datos de la ciudad seleccionada actualmente.
 * @returns {Object} Datos de la ciudad.
 */
function getActiveCityData() {
  return TOURISM_DATA[activeCountryKey]?.cities[activeCityKey] || null;
}

/**
 * Cambia el país activo, selecciona su primera ciudad y renderiza la interfaz.
 * @param {string} countryKey - Clave del país.
 */
function selectCountry(countryKey) {
  if (!TOURISM_DATA[countryKey]) return;

  activeCountryKey = countryKey;
  
  // Seleccionar la primera ciudad de este país automáticamente
  const cities = Object.keys(TOURISM_DATA[countryKey].cities);
  if (cities.length > 0) {
    selectCity(cities[0]);
  }

  renderCountryTabs();
  renderCityList();
}

/**
 * Cambia la ciudad activa, actualiza vistas, mapa y sugerencias del chatbot.
 * @param {string} cityKey - Clave de la ciudad.
 */
function selectCity(cityKey) {
  const country = TOURISM_DATA[activeCountryKey];
  if (!country || !country.cities[cityKey]) return;

  activeCityKey = cityKey;

  // Actualizar clases activas en la lista de ciudades del DOM
  document.querySelectorAll(".city-item").forEach(item => {
    item.classList.remove("active");
    if (item.dataset.city === cityKey) {
      item.classList.add("active");
    }
  });

  // Renderizar detalles de la ciudad
  renderCityDetails();

  // Actualizar el mapa con los restaurantes
  const cityData = getActiveCityData();
  updateMap(cityData);

  // Sincronizar sugerencias contextuales del chatbot
  updateSuggestions();
}

/**
 * Renderiza las pestañas de navegación de países.
 */
function renderCountryTabs() {
  const tabsContainer = document.getElementById("country-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = "";

  Object.keys(TOURISM_DATA).forEach(key => {
    const country = TOURISM_DATA[key];
    const button = document.createElement("button");
    button.className = `country-tab ${key === activeCountryKey ? "active" : ""}`;
    button.innerHTML = `<span class="flag">${country.flag}</span> ${country.name}`;
    button.addEventListener("click", () => selectCountry(key));
    tabsContainer.appendChild(button);
  });
}

/**
 * Renderiza el listado de ciudades en la barra lateral.
 */
function renderCityList() {
  const listContainer = document.getElementById("city-list");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  const country = TOURISM_DATA[activeCountryKey];
  if (!country) return;

  Object.keys(country.cities).forEach(key => {
    const city = country.cities[key];
    const div = document.createElement("div");
    div.className = `city-item ${key === activeCityKey ? "active" : ""}`;
    div.dataset.city = key;
    div.innerHTML = `
      <h3>${city.name}</h3>
      <p>${city.description.substring(0, 50)}...</p>
    `;
    div.addEventListener("click", () => selectCity(key));
    listContainer.appendChild(div);
  });
}

/**
 * Renderiza las actividades de la ciudad seleccionada.
 */
function renderCityDetails() {
  const cityTitle = document.getElementById("city-detail-title");
  const cityDesc = document.getElementById("city-detail-desc");
  const toursGrid = document.getElementById("tours-grid");

  const city = getActiveCityData();
  if (!city || !cityTitle || !cityDesc || !toursGrid) return;

  cityTitle.textContent = `Destacados en ${city.name}`;
  cityDesc.textContent = city.description;

  toursGrid.innerHTML = "";

  city.tours.forEach(tour => {
    const card = document.createElement("div");
    card.className = "tour-card";
    card.innerHTML = `
      <div class="tour-image-container">
        <img class="tour-image" src="${tour.image}" alt="${tour.name}" loading="lazy">
        <span class="tour-badge">${tour.price}</span>
      </div>
      <div class="tour-info">
        <h4 class="tour-title">${tour.name}</h4>
        <p class="tour-desc">${tour.description}</p>
        <div class="tour-meta">
          <span class="tour-duration"><i class="lucide-clock"></i> ${tour.duration}</span>
          <span class="tour-rating"><i class="lucide-star"></i> ${tour.rating}</span>
        </div>
      </div>
    `;
    toursGrid.appendChild(card);
  });
}

/**
 * Configura la barra de búsqueda del Hero con autocompletado y navegación directa.
 */
function setupSearch() {
  const searchInput = document.getElementById("hero-search-input");
  const resultsContainer = document.getElementById("search-results");
  if (!searchInput || !resultsContainer) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    resultsContainer.innerHTML = "";

    if (!query) {
      resultsContainer.classList.remove("visible");
      return;
    }

    const matches = [];

    // Buscar en todos los países y ciudades
    Object.keys(TOURISM_DATA).forEach(countryKey => {
      const country = TOURISM_DATA[countryKey];
      Object.keys(country.cities).forEach(cityKey => {
        const city = country.cities[cityKey];
        const cityNameNormalized = city.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const countryNameNormalized = country.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (cityNameNormalized.includes(query) || countryNameNormalized.includes(query)) {
          matches.push({
            countryKey,
            cityKey,
            cityName: city.name,
            countryName: country.name,
            flag: country.flag
          });
        }
      });
    });

    if (matches.length > 0) {
      resultsContainer.classList.add("visible");
      matches.forEach(match => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        item.innerHTML = `
          <span class="result-flag">${match.flag}</span>
          <div class="result-text">
            <strong>${match.cityName}</strong>, <span>${match.countryName}</span>
          </div>
        `;
        item.addEventListener("click", () => {
          searchInput.value = "";
          resultsContainer.classList.remove("visible");
          
          // Navegar a la ciudad
          selectCountry(match.countryKey);
          selectCity(match.cityKey);

          // Scroll suave hacia el explorador
          document.getElementById("explorer-section")?.scrollIntoView({ behavior: "smooth" });
        });
        resultsContainer.appendChild(item);
      });
    } else {
      resultsContainer.classList.remove("visible");
    }
  });

  // Ocultar resultados al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.classList.remove("visible");
    }
  });
}

// Inicialización de la aplicación al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar navegación y búsquedas
  selectCountry(activeCountryKey);
  setupSearch();

  // Inicializar Chatbot de IA pasándole el callback para obtener datos de la ciudad activa
  initChatbot(() => getActiveCityData());
});
