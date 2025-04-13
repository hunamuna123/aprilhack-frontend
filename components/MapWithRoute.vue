<template>
   
        <div id="map" class="w-full h-[500px] rounded-xl shadow-lg" />
  
   
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import L from 'leaflet'
  import 'leaflet-routing-machine'
  
  onMounted(() => {
    const map = L.map('map').setView([55.751244, 37.618423], 12) // Москва
  
    // ЧЕРНО-БЕЛЫЙ СТИЛЬ через CartoDB
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap & CartoDB',
    }).addTo(map)
  
    // GPS-точки
    const points = [
      L.latLng(55.751244, 37.618423), // Точка 1
      L.latLng(55.7635, 37.605),      // Точка 2
      L.latLng(55.7701, 37.6405),     // Точка 3
    ]
  
    // Построение маршрута
    L.Routing.control({
      waypoints: points,
      routeWhileDragging: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      lineOptions: {
        styles: [{ color: 'black', opacity: 0.8, weight: 5 }]
      },
      createMarker: (i, wp) => {
        return L.marker(wp.latLng, {
          icon: L.divIcon({
            className: 'custom-icon',
            html: `<div style="width:14px;height:14px;background:black;border-radius:50%;border:2px solid white;"></div>`,
          })
        })
      }
    }).addTo(map)
  })
  </script>
  