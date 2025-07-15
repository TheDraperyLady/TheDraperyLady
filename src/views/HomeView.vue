<script setup>
// Component logic here
</script>

<template>
  <div class="warm-home">
    <!-- Navigation -->
    <nav class="warm-nav">
      <div class="nav-container">
        <div class="logo">
          <h2>The Drapery Lady</h2>
        </div>
        <div class="nav-links">
          <a href="#home" class="active">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Transform Your Space with Beautiful Custom Drapery</h1>
        <p>
          Creating warm, inviting atmospheres through expertly crafted window treatments that make
          your home feel like a sanctuary.
        </p>
        <button class="cta-button">Schedule a Consultation</button>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <span>Beautiful Drapery Image</span>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>Why Choose The Drapery Lady?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏠</div>
            <h3>Custom Design</h3>
            <p>Every piece is uniquely designed to complement your home's style and personality.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👩‍🎨</div>
            <h3>Expert Craftsmanship</h3>
            <p>Over 15 years of experience creating beautiful, durable window treatments.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💝</div>
            <h3>Personal Touch</h3>
            <p>We work closely with you to ensure every detail meets your vision.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service-item">
            <h3>Custom Curtains</h3>
            <p>Elegant curtains tailored to your windows and style preferences.</p>
          </div>
          <div class="service-item">
            <h3>Drapery Panels</h3>
            <p>Luxurious drapery panels that add sophistication to any room.</p>
          </div>
          <div class="service-item">
            <h3>Valances & Swags</h3>
            <p>Decorative treatments that add the perfect finishing touch.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <h2>Ready to Transform Your Windows?</h2>
        <p>Let's create something beautiful together. Contact us today for a free consultation.</p>
        <button class="cta-button">Get Started</button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="warm-footer">
      <div class="container">
        <p>&copy; 2024 The Drapery Lady. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import '../assets/warm-home.css';
</style>
