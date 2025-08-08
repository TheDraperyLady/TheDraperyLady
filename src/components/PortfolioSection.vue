<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <h2>Portfolio</h2>
        <p>A showcase of our finest custom drapery installations</p>
      </div>
      <div :id="galleryID" class="portfolio-grid">
        <!-- Draperies Showcase -->
        <a
          :href="drapery1Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="drapery1Url" alt="Elegant Custom Draperies" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Elegant Drapery</h3>
              <p>Angled Draperies on Wrought Iron</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="drapery5Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="drapery5Url" alt="Premium Drapery Installation" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Premium Drapery</h3>
              <p>Long Ripplefold Draperies</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="drapery8Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="drapery8Url" alt="Custom Drapery Design" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Custom Drapery</h3>
              <p>Ripplefold Patterned Sheers</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <!-- Plantation Shutters Showcase -->
        <a
          :href="shutter1Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="shutter1Url" alt="Plantation Shutters" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Classic Shutter</h3>
              <p>Bay Window Shutters</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="shutter3Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="shutter3Url" alt="Custom Wood Shutters" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Premium Shutter</h3>
              <p>Bypass Shutters on a Patio Door</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="shutter5Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="shutter5Url" alt="Interior Shutters" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Interior Shutter</h3>
              <p>Bay Window Cornice Drapes & Shutters</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <!-- Valances Showcase -->
        <a
          :href="valance2Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="valance2Url" alt="Custom Valances" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Decorative Valance</h3>
              <p>Arched Continental with Honeycomb Shade</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="valance6Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="valance6Url" alt="Designer Valance" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Designer Valance</h3>
              <p>Cornice on a Small Window</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="valance10Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="valance10Url" alt="Luxury Valances" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Luxury Valance</h3>
              <p>Premium valances for refined window styling</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <!-- Additional Showcase Items -->
        <a
          :href="drapery12Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="drapery12Url" alt="Living Room Draperies" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Living Room Drapery</h3>
              <p>Peri-Winkle Print</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="valance14Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="valance14Url" alt="Bedroom Valances" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Premium Valance</h3>
              <p>Coordinated valances for elegant spaces</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>

        <a
          :href="drapery16Url"
          :data-pswp-width="1200"
          :data-pswp-height="800"
          target="_blank"
          rel="noreferrer"
          class="portfolio-item-link"
        >
          <div class="portfolio-item">
            <img :src="drapery16Url" alt="Formal Draperies" class="portfolio-img" />
            <div class="portfolio-overlay">
              <h3>Formal Drapery</h3>
              <p>Two-Fold Banded Over Draperies</p>
            </div>
            <div class="portfolio-lightbox-overlay">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const galleryID = ref('portfolio-gallery')
const lightbox = ref(null)

// Image URLs using proper URL construction
const drapery1Url = new URL('@assets/draperies/drapery-1.jpg', import.meta.url).href
const drapery5Url = new URL('@assets/draperies/drapery-5.jpg', import.meta.url).href
const drapery8Url = new URL('@assets/draperies/drapery-8.jpg', import.meta.url).href
const drapery12Url = new URL('@assets/draperies/drapery-12.jpg', import.meta.url).href
const drapery16Url = new URL('@assets/draperies/drapery-16.jpg', import.meta.url).href

const shutter1Url = new URL('@assets/shutters/shutter-1.jpg', import.meta.url).href
const shutter3Url = new URL('@assets/shutters/shutter-3.jpg', import.meta.url).href
const shutter5Url = new URL('@assets/shutters/shutter-5.jpg', import.meta.url).href

const valance2Url = new URL('@assets/valances/valance-2.jpg', import.meta.url).href
const valance6Url = new URL('@assets/valances/valance-6.jpg', import.meta.url).href
const valance10Url = new URL('@assets/valances/valance-10.jpg', import.meta.url).href
const valance14Url = new URL('@assets/valances/valance-14.jpg', import.meta.url).href

onMounted(() => {
  // Initialize PhotoSwipe lightbox
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '#' + galleryID.value,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      paddingFn: () => {
        return {
          top: 40,
          bottom: 40,
          left: 40,
          right: 40,
        }
      },
      showHideAnimationType: 'fade',
      showAnimationDuration: 300,
      hideAnimationDuration: 300,
    })
    lightbox.value.init()
  }
})

onUnmounted(() => {
  // Clean up PhotoSwipe lightbox
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})
</script>

<style scoped>
@import '../assets/elegant-home.css';

.portfolio-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-item-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.portfolio-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 3/4;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.portfolio-item-link:hover .portfolio-item {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.portfolio-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition:
    transform 0.3s ease,
    object-fit 0.3s ease;
  padding: 1rem;
}

.portfolio-item-link:hover .portfolio-img {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(44, 44, 44, 0.9));
  color: white;
  padding: 2rem 1.5rem;
  font-size: 1.1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: 'Crimson Text', 'Georgia', serif;
  font-style: italic;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.portfolio-item-link:hover .portfolio-overlay {
  opacity: 1;
  transform: translateY(0);
}

.portfolio-overlay h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  font-family: 'Crimson Text', 'Georgia', serif;
  font-style: italic;
}

.portfolio-overlay p {
  margin: 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Crimson Text', 'Georgia', serif;
  font-style: italic;
}

.portfolio-lightbox-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.portfolio-item-link:hover .portfolio-lightbox-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }

  .portfolio-item {
    aspect-ratio: 2/3;
  }

  .portfolio-img {
    padding: 0.5rem;
  }
}
</style>
