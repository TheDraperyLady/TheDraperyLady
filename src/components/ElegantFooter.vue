<template>
  <footer class="elegant-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="../assets/TDL_logo.png" alt="The Drapery Lady" class="footer-logo" />
          <h3>The Drapery Lady</h3>
          <p class="tagline">Classic, Simple and Elegant</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>Services</h4>
            <router-link to="/#about">About Christine</router-link>
            <router-link to="/products">Our Products</router-link>
            <router-link to="/#portfolio">Portfolio</router-link>
            <router-link to="/#testimonials">Testimonials</router-link>
          </div>
          <div class="link-group">
            <h4>Products</h4>
            <router-link to="/product/draperies">Custom Draperies</router-link>
            <router-link to="/product/shutters">Premium Shutters</router-link>
            <router-link to="/product/blinds">Designer Blinds</router-link>
            <router-link to="/product/shades">Luxury Shades</router-link>
            <router-link to="/product/motorization">Smart Motorization</router-link>
          </div>
          <div class="link-group">
            <h4>Contact</h4>
            <a href="tel:+14089811874">(408) 981-1874</a>
            <a href="mailto:christine@draperylady.net">christine@draperylady.net</a>
            <router-link to="/consultation">Schedule Consultation</router-link>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Classic, Simple and Elegant</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Add this to make the component aware of the color scheme
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  // Add the elegant-home class to the footer to inherit color scheme
  const footer = document.querySelector('.elegant-footer')
  if (footer) {
    footer.classList.add('elegant-home')
  }
})
</script>

<style scoped>
.elegant-footer {
  background: #2c2c2c;
  color: white;
  padding: 4rem 0 2rem;
  font-family: 'Crimson Text', 'Georgia', serif;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  height: 80px;
  width: auto;
  margin-bottom: 1rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  color: white;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.footer-brand .tagline {
  color: var(--primary-color, #800020);
  font-size: 0.9rem;
  font-style: italic;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}

.footer-brand .description {
  color: #ccc;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  color: var(--primary-color, #800020);
  font-family: 'Georgia', 'Times New Roman', serif;
}

.link-group a {
  display: block;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.link-group a:hover {
  color: var(--primary-color, #800020);
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 2rem;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .elegant-footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-brand {
    align-items: center;
    text-align: center;
  }

  .link-group {
    text-align: center;
  }
}
</style>
