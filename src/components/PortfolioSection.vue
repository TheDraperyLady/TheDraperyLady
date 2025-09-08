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

// CDN Base URL - configurable for different environments
const BASE_URL = 'https://draperylady.tanuj.xyz'

// Portfolio images data
const portfolioImages = [
  {
    src: `${BASE_URL}/draperies/drapery-1.jpg`,
    alt: 'Elegant Custom Draperies',
    title: 'Elegant Drapery',
    description: 'Angled Draperies on Wrought Iron',
  },
  {
    src: `${BASE_URL}/draperies/drapery-5.jpg`,
    alt: 'Premium Drapery Installation',
    title: 'Premium Drapery',
    description: 'Long Ripplefold Draperies',
  },
  {
    src: `${BASE_URL}/draperies/drapery-8.jpg`,
    alt: 'Custom Drapery Design',
    title: 'Custom Drapery',
    description: 'Ripplefold Patterned Sheers',
  },
  {
    src: `${BASE_URL}/shutters/shutter-6.jpg`,
    alt: 'Bedroom Plantation Shutters with Mountain View',
    title: 'Bedroom Shutters',
    description:
      'Elegant bedroom window treatment with scenic views featuring Norman Woodlore Composite Shutters',
  },
  {
    src: `${BASE_URL}/shutters/shutter-7.jpg`,
    alt: 'Dining Room Plantation Shutters',
    title: 'Dining Room Shutters',
    description:
      'Classic plantation shutters in dining area featuring Norman Woodlore Composite Shutters',
  },
  {
    src: `${BASE_URL}/shutters/shutter-8.jpg`,
    alt: 'Bathroom Plantation Shutters with Bathtub',
    title: 'Bathroom Shutters',
    description:
      'Luxurious bathroom with arched window shutters featuring Norman Woodlore Composite Shutters',
  },
  {
    src: `${BASE_URL}/shutters/shutter-9.jpg`,
    alt: 'Living Room Plantation Shutters',
    title: 'Living Room Shutters',
    description:
      'Modern living room with plantation shutters featuring Norman Woodlore Composite Shutters',
  },
  {
    src: `${BASE_URL}/shutters/shutter-10.jpg`,
    alt: 'Vaulted Ceiling Plantation Shutters',
    title: 'Vaulted Ceiling Shutters',
    description:
      'Custom triangular plantation shutters in vaulted ceiling room featuring Norman Woodlore Composite Shutters',
  },
  {
    src: `${BASE_URL}/shades/shades-1.jpg`,
    alt: 'Home Office with Norman PerfectSheer Shadings',
    title: 'Home Office Shadings',
    description: 'Modern home office featuring Norman PerfectSheer Shadings',
  },
  {
    src: `${BASE_URL}/shades/shades-2.jpg`,
    alt: 'Living Room with Norman PerfectSheer Shadings',
    title: 'Living Room Shadings',
    description: 'Bright living room with Norman PerfectSheer Shadings and indoor plants',
  },
  {
    src: `${BASE_URL}/shades/shades-3.jpg`,
    alt: 'Modern Living Room with Norman Roman Shades',
    title: 'Modern Living Room Roman Shades',
    description: 'Elegant living room featuring Norman Roman Shades with geometric pattern',
  },
  {
    src: `${BASE_URL}/shades/shades-4.jpg`,
    alt: 'Dining Room with Norman Roman Shades',
    title: 'Dining Room Roman Shades',
    description: 'Sophisticated dining area with Norman Roman Shades',
  },
  {
    src: `${BASE_URL}/shades/shades-5.jpg`,
    alt: 'Kitchen with Norman Roman Shades',
    title: 'Kitchen Roman Shades',
    description: 'Modern kitchen featuring Norman Roman Shades with grey finish',
  },
  {
    src: `${BASE_URL}/shades/shades-6.jpg`,
    alt: 'Living Room with Norman SmartDrape Sheer Shades',
    title: 'Living Room SmartDrape Shades',
    description:
      'Modern living space featuring Norman SmartDrape Sheer Shades with vertical design',
  },

  {
    src: `${BASE_URL}/blinds/blinds-2.jpg`,
    alt: 'Living Room with Norman Cordless Blinds',
    title: 'Living Room Cordless Blinds',
    description:
      'Elegant living room featuring Norman Cordless Blinds for enhanced safety and convenience',
  },
  {
    src: `${BASE_URL}/blinds/blinds-3.jpg`,
    alt: 'Bedroom with Norman Citylight Blinds',
    title: 'Citylight Blinds',
    description:
      'Modern kitchen featuring Norman Citylight Blinds for optimal privacy and light control',
  },
  {
    src: `${BASE_URL}/valances/valance-2.jpg`,
    alt: 'Custom Valances',
    title: 'Decorative Valance',
    description: 'Arched Continental with Honeycomb Shade',
  },
  {
    src: `${BASE_URL}/valances/valance-6.jpg`,
    alt: 'Designer Valance',
    title: 'Designer Valance',
    description: 'Cornice on a Small Window',
  },
  {
    src: `${BASE_URL}/valances/valance-10.jpg`,
    alt: 'Luxury Valances',
    title: 'Luxury Valance',
    description: 'Premium valances for refined window styling',
  },
  {
    src: `${BASE_URL}/draperies/drapery-12.jpg`,
    alt: 'Bedroom Draperies',
    title: 'Bedroom Drapery',
    description: 'Peri-Winkle Print',
  },
  {
    src: `${BASE_URL}/valances/valance-14.jpg`,
    alt: 'Bedroom Valances',
    title: 'Premium Valance',
    description: 'Coordinated valances for elegant spaces',
  },
  {
    src: `${BASE_URL}/draperies/drapery-16.jpg`,
    alt: 'Formal Draperies',
    title: 'Formal Drapery',
    description: 'Two-Fold Banded Over Draperies',
  },
  {
    src: `${BASE_URL}/shades/shades-13.jpg`,
    alt: 'Sunroom with Rust Colored Ceiling Shades',
    title: 'Sunroom Ceiling Shades',
    description:
      'Extensive system of rust-colored fabric shades covering a glass ceiling in a bright sunroom',
  },
  {
    src: `${BASE_URL}/shades/shades-14.jpg`,
    alt: 'Conference Room with Black Sunscreens',
    title: 'Conference Room Sunscreens',
    description:
      'Modern conference room with dark semi-transparent roller shades providing optimal light control and privacy',
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
