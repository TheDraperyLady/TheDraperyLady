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

// Import images directly for better SSG compatibility
import drapery1 from '../assets/draperies/drapery-1.jpg'
import drapery5 from '../assets/draperies/drapery-5.jpg'
import drapery8 from '../assets/draperies/drapery-8.jpg'
import shutter6 from '../assets/shutters/shutter-6.jpg'
import shutter7 from '../assets/shutters/shutter-7.jpg'
import shutter8 from '../assets/shutters/shutter-8.jpg'
import shutter9 from '../assets/shutters/shutter-9.jpg'
import shutter10 from '../assets/shutters/shutter-10.jpg'
import shades1 from '../assets/shades/shades-1.jpg'
import shades2 from '../assets/shades/shades-2.jpg'
import shades3 from '../assets/shades/shades-3.jpg'
import shades4 from '../assets/shades/shades-4.jpg'
import shades5 from '../assets/shades/shades-5.jpg'
import shades6 from '../assets/shades/shades-6.jpg'
import blinds2 from '../assets/blinds/blinds-2.jpg'
import blinds3 from '../assets/blinds/blinds-3.jpg'
import valance2 from '../assets/valances/valance-2.jpg'
import valance6 from '../assets/valances/valance-6.jpg'
import valance10 from '../assets/valances/valance-10.jpg'
import drapery12 from '../assets/draperies/drapery-12.jpg'
import valance14 from '../assets/valances/valance-14.jpg'
import drapery16 from '../assets/draperies/drapery-16.jpg'
import shades13 from '../assets/shades/shades-13.jpg'
import shades14 from '../assets/shades/shades-14.jpg'

// Portfolio images data
const portfolioImages = [
  {
    src: drapery1,
    alt: 'Elegant Custom Draperies',
    title: 'Elegant Drapery',
    description: 'Angled Draperies on Wrought Iron',
  },
  {
    src: drapery5,
    alt: 'Premium Drapery Installation',
    title: 'Premium Drapery',
    description: 'Long Ripplefold Draperies',
  },
  {
    src: drapery8,
    alt: 'Custom Drapery Design',
    title: 'Custom Drapery',
    description: 'Ripplefold Patterned Sheers',
  },
  {
    src: shutter6,
    alt: 'Bedroom Plantation Shutters with Mountain View',
    title: 'Bedroom Shutters',
    description:
      'Elegant bedroom window treatment with scenic views featuring Norman Woodlore Composite Shutters',
  },
  {
    src: shutter7,
    alt: 'Dining Room Plantation Shutters',
    title: 'Dining Room Shutters',
    description:
      'Classic plantation shutters in dining area featuring Norman Woodlore Composite Shutters',
  },
  {
    src: shutter8,
    alt: 'Bathroom Plantation Shutters with Bathtub',
    title: 'Bathroom Shutters',
    description:
      'Luxurious bathroom with arched window shutters featuring Norman Woodlore Composite Shutters',
  },
  {
    src: shutter9,
    alt: 'Living Room Plantation Shutters',
    title: 'Living Room Shutters',
    description:
      'Modern living room with plantation shutters featuring Norman Woodlore Composite Shutters',
  },
  {
    src: shutter10,
    alt: 'Vaulted Ceiling Plantation Shutters',
    title: 'Vaulted Ceiling Shutters',
    description:
      'Custom triangular plantation shutters in vaulted ceiling room featuring Norman Woodlore Composite Shutters',
  },
  {
    src: shades1,
    alt: 'Home Office with Norman PerfectSheer Shadings',
    title: 'Home Office Shadings',
    description: 'Modern home office featuring Norman PerfectSheer Shadings',
  },
  {
    src: shades2,
    alt: 'Living Room with Norman PerfectSheer Shadings',
    title: 'Living Room Shadings',
    description: 'Bright living room with Norman PerfectSheer Shadings and indoor plants',
  },
  {
    src: shades3,
    alt: 'Modern Living Room with Norman Roman Shades',
    title: 'Modern Living Room Roman Shades',
    description: 'Elegant living room featuring Norman Roman Shades with geometric pattern',
  },
  {
    src: shades4,
    alt: 'Dining Room with Norman Roman Shades',
    title: 'Dining Room Roman Shades',
    description: 'Sophisticated dining area with Norman Roman Shades',
  },
  {
    src: shades5,
    alt: 'Kitchen with Norman Roman Shades',
    title: 'Kitchen Roman Shades',
    description: 'Modern kitchen featuring Norman Roman Shades with grey finish',
  },
  {
    src: shades6,
    alt: 'Living Room with Norman SmartDrape Sheer Shades',
    title: 'Living Room SmartDrape Shades',
    description:
      'Modern living space featuring Norman SmartDrape Sheer Shades with vertical design',
  },

  {
    src: blinds2,
    alt: 'Living Room with Norman Cordless Blinds',
    title: 'Living Room Cordless Blinds',
    description:
      'Elegant living room featuring Norman Cordless Blinds for enhanced safety and convenience',
  },
  {
    src: blinds3,
    alt: 'Bedroom with Norman Citylight Blinds',
    title: 'Citylight Blinds',
    description:
      'Modern kitchen featuring Norman Citylight Blinds for optimal privacy and light control',
  },
  {
    src: valance2,
    alt: 'Custom Valances',
    title: 'Decorative Valance',
    description: 'Arched Continental with Honeycomb Shade',
  },
  {
    src: valance6,
    alt: 'Designer Valance',
    title: 'Designer Valance',
    description: 'Cornice on a Small Window',
  },
  {
    src: valance10,
    alt: 'Luxury Valances',
    title: 'Luxury Valance',
    description: 'Premium valances for refined window styling',
  },
  {
    src: drapery12,
    alt: 'Living Room Draperies',
    title: 'Living Room Drapery',
    description: 'Peri-Winkle Print',
  },
  {
    src: valance14,
    alt: 'Bedroom Valances',
    title: 'Premium Valance',
    description: 'Coordinated valances for elegant spaces',
  },
  {
    src: drapery16,
    alt: 'Formal Draperies',
    title: 'Formal Drapery',
    description: 'Two-Fold Banded Over Draperies',
  },
  {
    src: shades13,
    alt: 'Sunroom with Rust Colored Ceiling Shades',
    title: 'Sunroom Ceiling Shades',
    description:
      'Extensive system of rust-colored fabric shades covering a glass ceiling in a bright sunroom',
  },
  {
    src: shades14,
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
