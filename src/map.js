// =============================================================================
// dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
// Copyright (c) 2026 Andrea Huerta
// Licensed under the MIT License. See LICENSE for details.
// Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
// =============================================================================

let mapInstance = null;
let markersGroup = [];

/**
 * Inicializa o actualiza el mapa con la ciudad seleccionada y sus restaurantes.
 * @param {Object} city - Objeto de datos de la ciudad seleccionada.
 */
export function updateMap(city) {
  if (!city || !city.coords) return;

  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;

  // Si no se ha cargado Leaflet aún (ej: fallo de red), abortamos silenciosamente
  if (typeof window.L === "undefined") {
    console.error("Leaflet.js no está cargado.");
    mapContainer.innerHTML = `<div class="map-error">Error al cargar Leaflet.js. Por favor revisa tu conexión.</div>`;
    return;
  }

  const L = window.L;

  // Inicializar mapa si no existe
  if (!mapInstance) {
    mapInstance = L.map("map", {
      zoomControl: true,
      scrollWheelZoom: false // Evita interferir con el scroll de la página
    });

    // Agregar capa de mapa oscura (CartoDB Dark Matter)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20
    }).addTo(mapInstance);
  }

  // Limpiar marcadores previos
  clearMarkers();

  // Centrar mapa en la ciudad activa
  mapInstance.setView(city.coords, 13);

  // Agregar marcadores para cada restaurante
  if (city.restaurants && Array.isArray(city.restaurants)) {
    city.restaurants.forEach(rest => {
      // Icono personalizado para restaurantes (Dorado premium)
      const customIcon = L.divIcon({
        className: "custom-map-pin",
        html: `<div class="pin-circle"><i class="lucide-utensils"></i></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -32]
      });

      const marker = L.marker(rest.coords, { icon: customIcon }).addTo(mapInstance);
      
      // Popup estilizado con tokens del sistema de diseño
      const popupContent = `
        <div class="map-popup-card">
          <h4 class="popup-title">${rest.name}</h4>
          <div class="popup-meta">
            <span class="popup-cuisine"><i class="lucide-utensils-cross"></i> ${rest.cuisine}</span>
            <span class="popup-rating"><i class="lucide-star"></i> ${rest.rating}</span>
          </div>
          <p class="popup-desc">${rest.description}</p>
          <div class="popup-footer">
            <span class="popup-price">Precio: <strong>${rest.price}</strong></span>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        closeButton: false,
        className: "premium-leaflet-popup"
      });

      markersGroup.push(marker);
    });
  }

  // Forzar redibujado correcto por si el div cambió de dimensiones
  setTimeout(() => {
    mapInstance.invalidateSize();
  }, 100);
}

/**
 * Elimina todos los marcadores activos del mapa
 */
function clearMarkers() {
  if (mapInstance) {
    markersGroup.forEach(marker => {
      mapInstance.removeLayer(marker);
    });
  }
  markersGroup = [];
}
