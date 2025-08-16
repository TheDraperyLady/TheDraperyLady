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
    src: new URL('@assets/shutters/shutter-6.jpg', import.meta.url).href,
    alt: 'Bedroom Plantation Shutters with Mountain View',
    title: 'Bedroom Shutters',
    description:
      'Elegant bedroom window treatment with scenic views featuring Norman Woodlore Composite Shutters',
  },
  {
    src: new URL('@assets/shutters/shutter-7.jpg', import.meta.url).href,
    alt: 'Dining Room Plantation Shutters',
    title: 'Dining Room Shutters',
    description:
      'Classic plantation shutters in dining area featuring Norman Woodlore Composite Shutters',
  },
  {
    src: new URL('@assets/shutters/shutter-8.jpg', import.meta.url).href,
    alt: 'Bathroom Plantation Shutters with Bathtub',
    title: 'Bathroom Shutters',
    description:
      'Luxurious bathroom with arched window shutters featuring Norman Woodlore Composite Shutters',
  },
  {
    src: new URL('@assets/shutters/shutter-9.jpg', import.meta.url).href,
    alt: 'Living Room Plantation Shutters',
    title: 'Living Room Shutters',
    description:
      'Modern living room with plantation shutters featuring Norman Woodlore Composite Shutters',
  },
  {
    src: new URL('@assets/shutters/shutter-10.jpg', import.meta.url).href,
    alt: 'Vaulted Ceiling Plantation Shutters',
    title: 'Vaulted Ceiling Shutters',
    description:
      'Custom triangular plantation shutters in vaulted ceiling room featuring Norman Woodlore Composite Shutters',
  },
  {
    src: new URL('@assets/shades/shades-1.jpg', import.meta.url).href,
    alt: 'Home Office with Norman PerfectSheer Shadings',
    title: 'Home Office Shadings',
    description: 'Modern home office featuring Norman PerfectSheer Shadings',
  },
  {
    src: new URL('@assets/shades/shades-2.jpg', import.meta.url).href,
    alt: 'Living Room with Norman PerfectSheer Shadings',
    title: 'Living Room Shadings',
    description: 'Bright living room with Norman PerfectSheer Shadings and indoor plants',
  },
  {
    src: new URL('@assets/shades/shades-3.jpg', import.meta.url).href,
    alt: 'Modern Living Room with Norman Roman Shades',
    title: 'Modern Living Room Roman Shades',
    description: 'Elegant living room featuring Norman Roman Shades with geometric pattern',
  },
  {
    src: new URL('@assets/shades/shades-4.jpg', import.meta.url).href,
    alt: 'Dining Room with Norman Roman Shades',
    title: 'Dining Room Roman Shades',
    description: 'Sophisticated dining area with Norman Roman Shades',
  },
  {
    src: new URL('@assets/shades/shades-5.jpg', import.meta.url).href,
    alt: 'Kitchen with Norman Roman Shades',
    title: 'Kitchen Roman Shades',
    description: 'Modern kitchen featuring Norman Roman Shades with grey finish',
  },
  {
    src: new URL('@assets/shades/shades-6.jpg', import.meta.url).href,
    alt: 'Living Room with Norman SmartDrape Sheer Shades',
    title: 'Living Room SmartDrape Shades',
    description:
      'Modern living space featuring Norman SmartDrape Sheer Shades with vertical design',
  },
  {
    src: new URL('@assets/blinds/blinds-1.jpg', import.meta.url).href,
    alt: 'Dining Room with Norman Honeycomb Blinds',
    title: 'Dining Room Honeycomb Blinds',
    description:
      'Modern dining room featuring Norman Honeycomb Blinds with top-down/bottom-up operation',
  },
  {
    src: new URL('@assets/blinds/blinds-2.jpg', import.meta.url).href,
    alt: 'Living Room with Norman Cordless Blinds',
    title: 'Living Room Cordless Blinds',
    description:
      'Elegant living room featuring Norman Cordless Blinds for enhanced safety and convenience',
  },
  {
    src: new URL('@assets/blinds/blinds-3.jpg', import.meta.url).href,
    alt: 'Bedroom with Norman Citylight Blinds',
    title: 'Citylight Blinds',
    description:
      'Modern kitchen featuring Norman Citylight Blinds for optimal privacy and light control',
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
