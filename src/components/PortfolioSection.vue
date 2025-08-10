<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <h2>Portfolio</h2>
        <p>A showcase of our finest custom drapery installations</p>
      </div>
      <ImageGallery :images="portfolioImages" gallery-id="portfolio-gallery" />
    </div>
  </section>
</template>

<script setup>
import ImageGallery from './ImageGallery.vue'

// Portfolio images data
const portfolioImages = [
  {
    src: new URL('@assets/draperies/drapery-1.jpg', import.meta.url).href,
    alt: 'Elegant Custom Draperies',
    title: 'Elegant Drapery',
    description: 'Angled Draperies on Wrought Iron',
  },
  {
    src: new URL('@assets/draperies/drapery-5.jpg', import.meta.url).href,
    alt: 'Premium Drapery Installation',
    title: 'Premium Drapery',
    description: 'Long Ripplefold Draperies',
  },
  {
    src: new URL('@assets/draperies/drapery-8.jpg', import.meta.url).href,
    alt: 'Custom Drapery Design',
    title: 'Custom Drapery',
    description: 'Ripplefold Patterned Sheers',
  },
  {
    src: new URL('@assets/shutters/shutter-1.jpg', import.meta.url).href,
    alt: 'Plantation Shutters',
    title: 'Classic Shutter',
    description: 'Bay Window Shutters',
  },
  {
    src: new URL('@assets/shutters/shutter-3.jpg', import.meta.url).href,
    alt: 'Custom Wood Shutters',
    title: 'Premium Shutter',
    description: 'Bypass Shutters on a Patio Door',
  },
  {
    src: new URL('@assets/shutters/shutter-5.jpg', import.meta.url).href,
    alt: 'Interior Shutters',
    title: 'Interior Shutter',
    description: 'Bay Window Cornice Drapes & Shutters',
  },
  {
    src: new URL('@assets/valances/valance-2.jpg', import.meta.url).href,
    alt: 'Custom Valances',
    title: 'Decorative Valance',
    description: 'Arched Continental with Honeycomb Shade',
  },
  {
    src: new URL('@assets/valances/valance-6.jpg', import.meta.url).href,
    alt: 'Designer Valance',
    title: 'Designer Valance',
    description: 'Cornice on a Small Window',
  },
  {
    src: new URL('@assets/valances/valance-10.jpg', import.meta.url).href,
    alt: 'Luxury Valances',
    title: 'Luxury Valance',
    description: 'Premium valances for refined window styling',
  },
  {
    src: new URL('@assets/draperies/drapery-12.jpg', import.meta.url).href,
    alt: 'Living Room Draperies',
    title: 'Living Room Drapery',
    description: 'Peri-Winkle Print',
  },
  {
    src: new URL('@assets/valances/valance-14.jpg', import.meta.url).href,
    alt: 'Bedroom Valances',
    title: 'Premium Valance',
    description: 'Coordinated valances for elegant spaces',
  },
  {
    src: new URL('@assets/draperies/drapery-16.jpg', import.meta.url).href,
    alt: 'Formal Draperies',
    title: 'Formal Drapery',
    description: 'Two-Fold Banded Over Draperies',
  },
]
</script>

<style scoped>
@import '../assets/elegant-home.css';

.portfolio-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
}
</style>
