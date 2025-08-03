<template>
  <div class="elegant-home">
    <ElegantNav />
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Premium Products</h2>
          <p>Elevate Your Space with Elegant Window Treatments</p>
        </div>

        <div class="product-cards">
          <!-- Draperies -->
          <div class="product-section product-card" data-section="draperies">
            <div class="product-image-container">
              <img src="@/assets/service-4.webp" alt="Luxury Draperies" class="product-image" />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>Custom Draperies</h3>
                <p>
                  Transform your space with our luxurious custom draperies. Choose from a vast
                  selection of fabrics, patterns, and styles to create the perfect window treatment
                  for your home.
                </p>
                <div class="price">Starting from $199/panel</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: 'draperies' } }"
                  class="secondary-btn"
                >
                  View Drapery Details
                </router-link>
              </div>
            </div>
          </div>

          <!-- Shutters -->
          <div class="product-section product-card" data-section="shutters">
            <div class="product-image-container">
              <img src="@/assets/service-1.webp" alt="Premium Shutters" class="product-image" />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>Plantation Shutters</h3>
                <p>
                  Add timeless elegance with our plantation shutters. Available in wood, composite,
                  and vinyl materials, our shutters offer both beauty and functionality.
                </p>
                <div class="price">Starting from $199/window</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: 'shutters' } }"
                  class="secondary-btn"
                >
                  View Shutter Details
                </router-link>
              </div>
            </div>
          </div>

          <!-- Blinds -->
          <div class="product-section product-card" data-section="blinds">
            <div class="product-image-container">
              <img src="@/assets/service-2.webp" alt="Designer Blinds" class="product-image" />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>Designer Blinds</h3>
                <p>
                  Discover our collection of designer blinds, including wood, faux wood, and
                  cellular options. Perfect for any room and style preference.
                </p>
                <div class="price">Starting from $199/window</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: 'blinds' } }"
                  class="secondary-btn"
                >
                  View Blind Details
                </router-link>
              </div>
            </div>
          </div>

          <!-- Shades -->
          <div class="product-section product-card" data-section="shades">
            <div class="product-image-container">
              <img src="@/assets/service-3.webp" alt="Luxury Shades" class="product-image" />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>Luxury Shades</h3>
                <p>
                  Experience the perfect balance of light control and style with our luxury shades.
                  Available in roller, roman, and cellular styles.
                </p>
                <div class="price">Starting from $199/window</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: 'shades' } }"
                  class="secondary-btn"
                >
                  View Shade Details
                </router-link>
              </div>
            </div>
          </div>

          <!-- Motorization -->
          <div class="product-section product-card" data-section="motorization">
            <div class="product-image-container">
              <img
                src="@/assets/motorization.webp"
                alt="Smart Motorization"
                class="product-image"
              />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>Smart Motorization</h3>
                <p>
                  Upgrade your window treatments with smart motorization. Control your draperies and
                  shades effortlessly using your smart device, perfect for convenience, safety, and
                  modern functionality in your San Jose home.
                </p>
                <div class="price">Starting from $199/window</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: 'motorization' } }"
                  class="secondary-btn"
                >
                  View Motorization Details
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
          <button class="primary-btn">Book Consultation</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ElegantNav from '../components/ElegantNav.vue'
</script>

<style scoped>
@import '../assets/elegant-home.css';

.elegant-home {
  padding-top: 100px; /* Account for fixed navigation */
}

.services-section {
  padding: 2rem 0; /* Add vertical padding */
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

.price {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 2rem;
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
