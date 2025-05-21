var map = L.map('map').setView([4.737548141721112, -74.10419132124554], 13); 

// Agregar una capa de mapa (OpenStreetMap en este caso)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Crear un polígono de interés (puedes modificar las coordenadas)
var polygon = L.polygon([
  [4.738717940708956, -74.10735550559542],  // Punto 1
  [4.735005093615307, -74.10955002054776],  // Punto 2
  [4.737395559098514, -74.1036299336996],  // Punto 3
  [4.732665481100575, -74.1069982589753]   // Punto 4
]).addTo(map);

// Añadir un popup al polígono
polygon.bindPopup("Zona donde de estudio del proyecto").openPopup();23
