<template>
  <div class="elegant-home">
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
                  A wide variety of custom draperies are available - Pinch pleated draperies, rod
                  pocket draperies and ripplefold draperies to name a few.
                </p>
                <div class="price">Timeless Elegance, Tailored to Your Vision</div>
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
                  Elevate your windows with plantation shutters that blend timeless sophistication
                  with modern functionality. The perfect marriage of elegance and light control.
                </p>
                <div class="price">Classic Style Meets Modern Sophistication</div>
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
                  Where precision meets style. Our designer blinds offer the perfect blend of form
                  and function, with options to complement any interior vision.
                </p>
                <div class="price">Precision Engineering for Perfect Light Control</div>
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
                  Discover the art of light mastery with our luxury shades. From gentle filtering to
                  total privacy, create your perfect ambiance with sophisticated style.
                </p>
                <div class="price">Effortless Elegance for Every Window</div>
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

          <!-- Valances -->
          <div class="product-section product-card" data-section="valances">
            <div class="product-image-container">
              <img
                src="@/assets/valances/valance-1.jpg"
                alt="Custom Valances"
                class="product-image"
              />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>Custom Valances</h3>
                <p>
                  Add a finishing touch to your windows with our custom valances. From classic swags
                  to modern straight valances, our designs perfectly frame your windows while adding
                  architectural interest.
                </p>
                <div class="price">Elegant Window Top Treatments</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: 'valances' } }"
                  class="secondary-btn"
                >
                  View Valance Details
                </router-link>
              </div>
            </div>
          </div>

          <!-- Hardware & Motorization -->
          <div class="product-section product-card" data-section="accessories">
            <div class="product-image-container">
              <img
                src="@/assets/motorization.webp"
                alt="Hardware and Motorization"
                class="product-image"
              />
            </div>
            <div class="product-content">
              <div class="product-text">
                <h3>Accessories & Motorization</h3>
                <p>
                  Enhance your window treatments with our premium selection of hardware and smart
                  motorization solutions. From decorative rods to automated controls, we offer
                  everything to complete your perfect window design with both style and modern
                  convenience.
                </p>
                <div class="price">Smart Solutions & Elegant Finishes</div>
              </div>
              <div class="product-actions">
                <router-link
                  :to="{ name: 'product-detail', params: { type: 'accessories' } }"
                  class="secondary-btn"
                >
                  View Accessories & Motorization
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
import ElegantNav from '../components/ElegantNav.vue'
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

.price {
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
