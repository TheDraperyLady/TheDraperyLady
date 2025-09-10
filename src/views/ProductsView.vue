<template>
  <div class="elegant-home">
    <section class="services-section">
      <div class="container">
        <div class="section-header animate-on-scroll fade-in">
          <h2>Our Premium Products</h2>
          <p>Elevate Your Space with Elegant Window Treatments</p>
        </div>

        <div class="product-cards">
          <div
            v-for="(product, type, index) in productDetails"
            :key="type"
            class="product-section product-card animate-on-scroll slide-in-up"
            :data-section="type"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="product-image-container">
              <img :src="imagePresets.product(product.mainImage)" :alt="product.title" class="product-image" />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <div class="lede">{{ product.lede }}</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: type } }"
                  class="secondary-btn"
                >
                  View {{ product.title }} Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="consultation-cta animate-on-scroll fade-in">
      <div class="container">
        <div class="cta-content">
          <h2>Find Your Perfect Window Treatment</h2>
          <p>Schedule a consultation with our design experts</p>
          <router-link to="/consultation" class="primary-btn">Book Consultation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { productDetails } from '../data/productDetails'
import { imagePresets } from '../utils/imageOptimization.js'

// SEO head management
useHead({
  title: 'Our Products - Custom Drapery, Blinds, Shades & Shutters | The Drapery Lady',
  meta: [
    {
      name: 'description',
      content:
        'Explore our premium window treatments including custom drapery, blinds, shades, and shutters. Expert craftsmanship and elegant designs for your home.',
    },
    {
      name: 'keywords',
      content:
        'custom drapery, blinds, shades, shutters, window treatments, premium drapery, custom blinds',
    },
    {
      property: 'og:title',
      content: 'Our Products - Custom Window Treatments | The Drapery Lady',
    },
    {
      property: 'og:description',
      content: 'Premium custom drapery, blinds, shades, and shutters for your home.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://draperylady.net/products',
    },
    {
      property: 'og:image',
      content: 'https://draperylady.net/src/assets/TDL_logo.png',
    },
    {
      property: 'og:site_name',
      content: 'The Drapery Lady',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Our Products - Custom Window Treatments',
    },
    {
      name: 'twitter:description',
      content: 'Premium custom drapery, blinds, shades, and shutters for your home.',
    },
    {
      name: 'twitter:image',
      content: 'https://draperylady.net/src/assets/TDL_logo.png',
    },
  ],
})

onMounted(() => {
  // Initialize scroll animations
  initScrollAnimations()
})

const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 400px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach((el) => observer.observe(el))
}
</script>

<style scoped>
@import '../assets/elegant-home.css';

/* Animation Classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Slide animations */
.slide-in-up {
  transform: translateY(50px);
}

.slide-in-up.animate {
  transform: translateY(0);
}

/* Fade in */
.fade-in {
  transform: translateY(20px);
}

.fade-in.animate {
  transform: translateY(0);
}

/* Enhanced hover effects */
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.product-card:hover .product-image {
  transform: scale(1.08);
}

/* Smooth transitions for all interactive elements */
.product-card,
.product-image {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Enhanced button animations */
.primary-btn,
.secondary-btn {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.primary-btn:active,
.secondary-btn:active {
  transform: translateY(0);
}

/* Responsive animations */
@media (max-width: 768px) {
  .animate-on-scroll {
    transition-duration: 0.6s;
  }
}

.elegant-home {
  padding-top: 100px; /* Account for fixed navigation */
}

.services-section {
  padding: 4rem 0; /* Add vertical padding */
}

.product-cards {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 3rem 0;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  min-height: 400px;
}

.product-image-container {
  height: 100%;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  border-right: 1px solid var(--border-color);
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-text h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.product-text p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.lede {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.product-actions {
  margin-top: auto;
}

.product-actions .secondary-btn {
  display: inline-block;
  text-align: center;
  font-size: 0.95rem;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  color: var(--primary-color);
  font-family: 'Crimson Text', 'Georgia', serif;
  letter-spacing: 0.5px;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  transition: all 0.3s ease;
  background: transparent;
}

.product-actions .secondary-btn:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .product-card {
    grid-template-columns: 1fr;
  }

  .product-image-container {
    height: 300px;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }

  .product-content {
    padding: 2rem;
  }

  .product-text h3 {
    font-size: 1.8rem;
  }
}
</style>
