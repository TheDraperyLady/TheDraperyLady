<template>
  <div class="service-area-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Service Area</h2>
        <p>Serving San Jose and the surrounding Bay Area</p>
      </div>
      <div class="map-container">
        <div id="map" ref="mapRef"></div>
        <div class="service-areas">
          <h3>Areas We Serve</h3>
          <ul>
            <li>San Jose</li>
            <li>Campbell</li>
            <li>Saratoga</li>
            <li>Los Altos</li>
            <li>Palo Alto</li>
            <li>Fremont</li>
            <li>Mountain View</li>
            <li>Santa Clara</li>
            <li>Sunnyvale</li>
            <li>Menlo Park</li>
          </ul>
          <div class="contact-note">
            <p>Is your location not on the list? Just give us a call!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mapRef = ref(null)
let map = null

const initMap = () => {
  // Define city locations with exact coordinates
  const cities = [
    { name: 'Menlo Park', lat: 37.4538, lng: -122.1822 },
    { name: 'Palo Alto', lat: 37.4419, lng: -122.143 },
    { name: 'Mountain View', lat: 37.3861, lng: -122.0839 },
    { name: 'Sunnyvale', lat: 37.3688, lng: -122.0363 },
    { name: 'Santa Clara', lat: 37.3541, lng: -121.9552 },
    { name: 'San Jose', lat: 37.3382, lng: -121.8863 },
    { name: 'Evergreen', lat: 37.3087, lng: -121.766 },
    { name: 'Almaden Valley', lat: 37.2267, lng: -121.9269 },
    { name: 'Campbell', lat: 37.2872, lng: -121.95 },
    { name: 'Saratoga', lat: 37.2638, lng: -122.023 },
    { name: 'Los Altos', lat: 37.3852, lng: -122.1161 },
    { name: 'Fremont', lat: 37.5485, lng: -122.0085 },
  ]

  // Define service area boundaries following city outlines with padding
  const serviceAreaBoundaries = [
    { lat: 37.5785, lng: -122.2105 }, // Start beyond Menlo Park
    { lat: 37.5885, lng: -122.0485 }, // Curve towards Fremont
    { lat: 37.5785, lng: -121.9785 }, // Beyond Fremont
    { lat: 37.4891, lng: -121.8305 }, // Northeast curve
    { lat: 37.424, lng: -121.7481 }, // East of San Jose
    { lat: 37.3087, lng: -121.726 }, // Southeast curve
    { lat: 37.1974, lng: -121.7764 }, // South of Evergreen
    { lat: 37.1874, lng: -121.8584 }, // South San Jose
    { lat: 37.1974, lng: -121.9469 }, // South of Almaden
    { lat: 37.2238, lng: -122.053 }, // Southwest curve
    { lat: 37.2938, lng: -122.083 }, // Beyond Saratoga
    { lat: 37.3552, lng: -122.1461 }, // Curve towards Los Altos
    { lat: 37.4152, lng: -122.1761 }, // Beyond Los Altos
    { lat: 37.4749, lng: -122.1905 }, // Curve towards Menlo Park
    { lat: 37.5785, lng: -122.2105 }, // Back to start
  ]

  map = new google.maps.Map(mapRef.value, {
    center: { lat: 37.3382, lng: -121.95 }, // Centered on San Jose
    zoom: 10,
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#faf8f6' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#e3e3e3' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ],
  })

  // Create a polygon for the service area
  const serviceAreaPolygon = new google.maps.Polygon({
    paths: serviceAreaBoundaries,
    strokeColor: '#800020',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#800020',
    fillOpacity: 0.1,
    map: map,
  })

  // Add markers and labels for each city
  cities.forEach((city) => {
    // Create marker
    const marker = new google.maps.Marker({
      position: { lat: city.lat, lng: city.lng },
      map: map,
      title: city.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#800020',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
      },
    })

    // Create info window for the city name
    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="color: #800020; font-family: Georgia, serif; padding: 5px;">${city.name}</div>`,
      pixelOffset: new google.maps.Size(0, -5),
      disableAutoPan: true,
      closeButton: false,
    })

    // Hide the close button after the info window is created
    google.maps.event.addListener(infoWindow, 'domready', () => {
      const closeButtons = document.querySelectorAll('.gm-ui-hover-effect')
      closeButtons.forEach((button) => {
        button.style.display = 'none'
      })
    })

    // Add hover event listeners
    marker.addListener('mouseover', () => {
      infoWindow.open(map, marker)
    })

    marker.addListener('mouseout', () => {
      infoWindow.close()
    })
  })
}

onMounted(() => {
  // Wait for Google Maps to be fully loaded
  if (window.google && window.google.maps) {
    initMap()
  } else {
    // If Google Maps isn't loaded yet, wait for it
    window.initMap = initMap
    const checkGoogleMaps = setInterval(() => {
      if (window.google && window.google.maps) {
        initMap()
        clearInterval(checkGoogleMaps)
      }
    }, 100)
  }
})
</script>

<style scoped>
.service-area-section {
  padding: 60px 0;
  background: #fff;
  margin: 48px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 32px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2c2c2c;
  font-family: 'Georgia', 'Times New Roman', serif;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.2rem;
  color: #3d2b1f;
  opacity: 0.9;
}

.map-container {
  display: flex;
  gap: 32px;
  margin-top: 32px;
  align-items: center;
}

#map {
  flex: 1;
  height: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.service-areas {
  width: 300px;
  padding: 24px;
  background: #faf8f6;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
}

.service-areas h3 {
  color: #800020;
  font-family: 'Georgia', 'Times New Roman', serif;
  margin-bottom: 16px;
}

.service-areas ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-areas li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #3d2b1f;
  font-size: 1.1rem;
}

.service-areas li:last-child {
  border-bottom: none;
}

.contact-note {
  margin-top: 24px;
  padding: 16px;
  background: #800020;
  border-radius: 8px;
  text-align: center;
}

.contact-note p {
  color: white;
  font-size: 1rem;
  margin: 0;
  font-style: italic;
  font-family: 'Georgia', 'Times New Roman', serif;
}

@media (max-width: 900px) {
  .map-container {
    flex-direction: column;
  }

  .service-areas {
    width: 100%;
  }

  #map {
    height: 400px;
  }
}

@media (max-width: 600px) {
  #map {
    height: 300px;
  }

  .service-area-section {
    padding: 40px 0;
  }
}
</style>
