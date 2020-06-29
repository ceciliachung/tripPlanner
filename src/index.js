// const mapboxgl = require("mapbox-gl");

// mapboxgl.accessToken = 'pk.eyJ1IjoiY2VjaWxpYXl1Y2h1bmciLCJhIjoiY2s5c252MDF0MTc1OTNxcGpkbmNsYjg1eiJ9.0aZ0qBEOJ-8kgdV-vjzQPA';

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });

// const marker = document.createElement("div");
// marker.style.width = "32px";
// marker.style.height = "39px";
// marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiY2VjaWxpYXl1Y2h1bmciLCJhIjoiY2s5c252MDF0MTc1OTNxcGpkbmNsYjg1eiJ9.0aZ0qBEOJ-8kgdV-vjzQPA';
const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.position = "absolute";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//el.style.backgroundImage ='url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);