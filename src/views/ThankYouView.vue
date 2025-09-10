<template>
  <div class="elegant-home">
    <section class="thank-you-page">
      <div class="container">
        <div class="thank-you-content animate-on-scroll fade-in">
          <div class="success-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <path
                d="M8 12l2 2 4-4"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h1>Thank You!</h1>
          <p class="thank-you-message">
            Your consultation request has been submitted successfully. We'll get back to you within
            24 hours to schedule your personalized consultation.
          </p>

          <div class="next-steps">
            <h3>What happens next?</h3>
            <ul class="steps-list">
              <li>
                <div class="step-number">1</div>
                <div class="step-content">
                  <strong>We'll review your request</strong>
                  <p>Our team will carefully review your project details and preferences.</p>
                </div>
              </li>
              <li>
                <div class="step-number">2</div>
                <div class="step-content">
                  <strong>We'll contact you</strong>
                  <p>
                    Within 24 hours, we'll call you to discuss your project and schedule a
                    convenient time.
                  </p>
                </div>
              </li>
              <li>
                <div class="step-number">3</div>
                <div class="step-content">
                  <strong>We'll visit your space</strong>
                  <p>
                    We'll come to your home for precise measurements and personalized
                    recommendations.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>Questions? Contact us directly:</h3>
            <a href="tel:4089811874" class="phone-link">(408) 981-1874</a>
            <p class="availability">Available Monday - Friday: 9 AM - 6 PM PST</p>
          </div>

          <div class="action-buttons">
            <router-link to="/" class="primary-btn">Return to Home</router-link>
            <router-link to="/products" class="secondary-btn">Browse Our Products</router-link>
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
  title: 'Thank You - The Drapery Lady | Consultation Request Received',
  meta: [
    {
      name: 'description',
      content:
        "Thank you for your consultation request with The Drapery Lady. We'll contact you within 24 hours to schedule your personalized consultation.",
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
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

.elegant-home {
  padding-top: 100px; /* Account for fixed navigation */
}

.thank-you-page {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.thank-you-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: white;
  padding: 4rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
}

.success-icon {
  margin-bottom: 2rem;
  animation: bounceIn 0.8s ease-out;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.thank-you-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.thank-you-message {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.next-steps {
  margin: 3rem 0;
  text-align: left;
}

.next-steps h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 2rem;
  text-align: center;
}

.steps-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.steps-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--background-light);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.steps-list li:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.step-content strong {
  display: block;
  font-size: 1.1rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.step-content p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.5;
}

.contact-info {
  margin: 3rem 0;
  padding: 2rem;
  background: var(--background-light);
  border-radius: 12px;
}

.contact-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.phone-link {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  margin: 1rem 0;
  transition: all 0.3s ease;
}

.phone-link:hover {
  transform: translateY(-2px);
  color: var(--secondary-color);
}

.availability {
  color: var(--text-light);
  font-style: italic;
  margin: 0;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
}

.primary-btn,
.secondary-btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.primary-btn {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.primary-btn:hover {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.secondary-btn {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.secondary-btn:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .thank-you-content {
    padding: 2rem;
    margin: 1rem;
  }

  .thank-you-content h1 {
    font-size: 2.5rem;
  }

  .steps-list li {
    flex-direction: column;
    text-align: center;
  }

  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    max-width: 300px;
  }

  .phone-link {
    font-size: 1.8rem;
  }
}
</style>
