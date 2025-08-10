<template>
  <div class="elegant-home">
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Premium Products</h2>
          <p>Elevate Your Space with Elegant Window Treatments</p>
        </div>

        <div class="product-cards">
          <div
            v-for="(product, type) in productDetails"
            :key="type"
            class="product-section product-card"
            :data-section="type"
          >
            <div class="product-image-container">
              <img :src="product.mainImage" :alt="product.title" class="product-image" />
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
    <section class="consultation-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Find Your Perfect Window Treatment</h2>
          <p>Schedule a free consultation with our design experts</p>
          <router-link to="/consultation" class="primary-btn">Book Consultation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { productDetails } from '../data/productDetails'
</script>

<style scoped>
@import '../assets/elegant-home.css';

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

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
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

.product-card:hover .product-image {
  transform: scale(1.05);
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
