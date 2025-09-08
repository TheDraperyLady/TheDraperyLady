<template>
  <div class="elegant-home">
    <section class="consultation-page">
      <div class="container">
        <div class="section-header animate-on-scroll fade-in">
          <h2>Schedule Your Consultation</h2>
          <p>Transform Your Space with Expert Guidance</p>
        </div>

        <div class="consultation-content">
          <div class="consultation-info">
            <div class="info-card animate-on-scroll slide-in-left">
              <h3>Call Us Directly</h3>
              <p>Speak with our design experts right away:</p>
              <a href="tel:4089811874" class="phone-number">(408) 981-1874</a>
              <p class="availability">Available Monday - Friday: 9 AM - 6 PM PST</p>
            </div>

            <div class="info-card animate-on-scroll slide-in-left" style="animation-delay: 0.2s">
              <h3>Why Choose a Consultation?</h3>
              <ul class="benefits-list">
                <li>Expert design advice tailored to your space</li>
                <li>Personalized fabric and style recommendations</li>
                <li>Precise measurements for perfect fit</li>
                <li>Detailed pricing and timeline estimates</li>
                <li>Professional installation planning</li>
              </ul>
            </div>
          </div>

          <div class="consultation-form-container animate-on-scroll slide-in-right">
            <h3>Request a Consultation</h3>
            <form
              action="https://formkeep.com/f/4b94c176d477"
              accept-charset="UTF-8"
              enctype="multipart/form-data"
              method="POST"
              class="consultation-form"
            >
              <div class="form-group animate-on-scroll fade-in-delay">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div class="form-group animate-on-scroll fade-in-delay" style="animation-delay: 0.1s">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div class="form-group animate-on-scroll fade-in-delay" style="animation-delay: 0.2s">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div class="form-group animate-on-scroll fade-in-delay" style="animation-delay: 0.3s">
                <label for="address">Property Address</label>
                <input type="text" id="address" name="address" required />
              </div>

              <div class="form-group animate-on-scroll fade-in-delay" style="animation-delay: 0.4s">
                <label for="project">Tell Us About Your Project</label>
                <textarea id="project" name="project" rows="4" required></textarea>
              </div>

              <div class="form-group animate-on-scroll fade-in-delay" style="animation-delay: 0.5s">
                <label for="preferred-time">Preferred Consultation Time</label>
                <select id="preferred-time" name="preferred-time" required>
                  <option value="">Select a time...</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                class="primary-btn animate-on-scroll fade-in-delay"
                style="animation-delay: 0.6s"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

// SEO head management
useHead({
  title: 'Consultation - The Drapery Lady | Custom Window Treatments',
  meta: [
    {
      name: 'description',
      content:
        'Schedule your consultation with The Drapery Lady. Expert design advice, personalized recommendations, and precise measurements for your custom window treatments.',
    },
    {
      name: 'keywords',
      content:
        'drapery consultation, window treatment consultation, custom drapery, blinds consultation, shades consultation, consultation',
    },
    {
      property: 'og:title',
      content: 'Consultation - The Drapery Lady | Custom Window Treatments',
    },
    {
      property: 'og:description',
      content:
        'Schedule your consultation with The Drapery Lady. Expert design advice, personalized recommendations, and precise measurements for your custom window treatments.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://draperylady.net/consultation',
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
      content: 'Consultation - The Drapery Lady',
    },
    {
      name: 'twitter:description',
      content:
        'Schedule your consultation with The Drapery Lady. Expert design advice and personalized recommendations.',
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
    rootMargin: '0px 0px -50px 0px',
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
.slide-in-left {
  transform: translateX(-50px);
}

.slide-in-left.animate {
  transform: translateX(0);
}

.slide-in-right {
  transform: translateX(50px);
}

.slide-in-right.animate {
  transform: translateX(0);
}

/* Fade in with delay */
.fade-in-delay {
  transition-delay: 0.3s;
}

/* Enhanced hover effects */
.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.consultation-form-container:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

/* Form field focus animations */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Smooth transitions for all interactive elements */
.info-card,
.consultation-form-container,
.form-group input,
.form-group select,
.form-group textarea {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Enhanced button animations */
.primary-btn {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.primary-btn:active {
  transform: translateY(0);
}

/* Phone number hover effect */
.phone-number:hover {
  transform: translateY(-3px);
  color: var(--secondary-color);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Benefits list item animations */
.benefits-list li {
  transition: all 0.3s ease;
}

.benefits-list li:hover {
  transform: translateX(5px);
  color: var(--primary-color);
}

.benefits-list li:hover::before {
  background: var(--secondary-color);
  transform: scale(1.2);
}

/* Responsive animations */
@media (max-width: 768px) {
  .animate-on-scroll {
    transition-duration: 0.6s;
  }

  .slide-in-left,
  .slide-in-right {
    transform: translateY(30px);
  }

  .slide-in-left.animate,
  .slide-in-right.animate {
    transform: translateY(0);
  }
}

.elegant-home {
  padding-top: 100px; /* Account for fixed navigation */
}

.consultation-page {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
}

.consultation-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  margin-top: 3rem;
}

.consultation-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
}

.info-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.phone-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  margin: 1rem 0;
  transition: all 0.3s ease;
}

.availability {
  color: var(--text-light);
  font-style: italic;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  color: var(--text-light);
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  line-height: 1.6;
}

.benefits-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-color);
  transition: all 0.3s ease;
}

.consultation-form-container {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
}

.consultation-form-container h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-dark);
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: var(--text-dark);
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-dark);
  transition: all 0.3s ease;
}

.form-group select {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-dark);
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--border-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.primary-btn {
  margin-top: 1rem;
  width: 100%;
}

@media (max-width: 768px) {
  .consultation-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .consultation-form-container {
    padding: 2rem;
  }

  .info-card {
    padding: 2rem;
  }

  .phone-number {
    font-size: 1.8rem;
  }
}
</style>
