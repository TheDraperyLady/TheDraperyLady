<template>
  <div class="elegant-home">
    <section class="product-detail-section">
      <div class="container">
        <!-- Hero Section -->
        <div class="product-hero">
          <div class="product-hero-content">
            <div class="product-hero-text">
              <h1>{{ productDetails[productType]?.title || 'Product Details' }}</h1>
              <p class="hero-subtitle">
                {{ productDetails[productType]?.subtitle || 'Elegant Window Treatments' }}
              </p>
              <p class="hero-description">
                {{ productDetails[productType]?.description || 'Loading product details...' }}
              </p>
              <div class="cta-group">
                <router-link to="/consultation" class="primary-btn"
                  >Schedule Consultation</router-link
                >
                <button class="secondary-btn" @click="scrollToGallery">View Gallery</button>
              </div>
            </div>
            <div class="product-hero-visual">
              <div class="elegant-frame">
                <img
                  :src="productDetails[productType]?.mainImage"
                  :alt="productDetails[productType]?.title"
                  class="hero-image"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div
          v-if="
            productDetails[productType]?.features &&
            productDetails[productType]?.features.length > 0
          "
          class="features-section"
        >
          <div class="section-header">
            <h2>Key Features</h2>
            <p>What Makes Our {{ productDetails[productType]?.title }} Special</p>
          </div>
          <div class="features-grid">
            <div
              v-for="(feature, index) in productDetails[productType]?.features"
              :key="index"
              class="feature-card"
            >
              <div class="feature-icon">
                <FontAwesomeIcon :icon="['fas', feature.icon]" size="2x" />
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Gallery Section -->
        <div id="gallery" class="gallery-section">
          <div class="section-header">
            <h2>Gallery</h2>
            <p>See Our {{ productDetails[productType]?.title }} in Action</p>
          </div>
          <ImageGallery
            :images="productDetails[productType]?.gallery || []"
            gallery-id="product-gallery"
          />
        </div>

        <!-- Options Section -->
        <div class="options-section">
          <div class="section-header">
            <h2>Available Options</h2>
            <p>Customize to Your Preferences</p>
          </div>
          <div class="options-grid">
            <div
              v-for="(option, index) in productDetails[productType]?.options"
              :key="index"
              class="option-card"
            >
              <h3>{{ option.category }}</h3>
              <ul>
                <li v-for="(item, itemIndex) in option.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="consultation-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Space?</h2>
          <p>Schedule a consultation with our design experts</p>
          <router-link to="/consultation" class="primary-btn">Book Consultation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { productDetails } from '../data/productDetails'
import { FontAwesomeIcon } from '../plugins/fontawesome'
import ImageGallery from '../components/ImageGallery.vue'

const route = useRoute()
const productType = computed(() => route.params.type)

const scrollToGallery = () => {
  const gallerySection = document.getElementById('gallery')
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
@import '../assets/elegant-home.css';

.product-detail-section {
  padding-top: 120px; /* Account for fixed navigation */
}

.product-hero {
  padding: 80px 40px;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  border-radius: 30px;
  margin: 2rem 0 4rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.product-hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.product-hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.elegant-frame {
  position: relative;
  width: 100%;
  height: 500px;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.elegant-frame::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 2px solid var(--primary-color);
  border-radius: 15px;
  opacity: 0.3;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  position: relative;
  z-index: 1;
}

/* Features Section */
.features-section {
  padding: 4rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  color: var(--primary-color);
  opacity: 0.9;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  opacity: 1;
  transform: scale(1.1);
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.6;
}

/* Gallery Section */
.gallery-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  border-radius: 30px;
}

/* Options Section */
.options-section {
  padding: 4rem 0;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.option-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.option-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.option-card ul {
  list-style: none;
  padding: 0;
}

.option-card li {
  color: var(--text-light);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.option-card li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .product-hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .product-hero-text h1 {
    font-size: 2.5rem;
  }

  .elegant-frame {
    height: 300px;
  }

  .features-grid,
  .options-grid {
    grid-template-columns: 1fr;
  }

  /* Mobile button styling */
  .cta-group .primary-btn {
    font-size: 0.85rem;
    padding: 0.5rem 1.25rem;
  }

  .cta-group .secondary-btn {
    font-size: 0.85rem;
    padding: 0.5rem 1.25rem;
  }

  /* Reduce horizontal padding across the page */
  .product-hero {
    padding: 60px 20px;
    margin: 1rem 0 3rem 0;
  }

  .gallery-section {
    padding: 3rem 1rem;
  }

  .features-section {
    padding: 3rem 0;
  }

  .options-section {
    padding: 3rem 0;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
