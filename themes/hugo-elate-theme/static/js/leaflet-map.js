function initMap() {
  var latLong = [-41.292028, 174.778962]; // Put your address here

  var map = L.map("map").setView(latLong, 10);

  L.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
  }).addTo(map);

  var icon = L.icon({
    iconUrl: "images/map-marker.png",
    iconSize: [25, 41],
    //iconUrl: "images/map-loc.png",
    //iconSize:     [57, 66],
  });
  var marker = L.marker(latLong, { icon: icon }).addTo(map);
}
document.addEventListener("DOMContentLoaded", initMap);
