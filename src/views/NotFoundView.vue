<template>
  <div class="not-found-page elegant-home">
    <div class="not-found-container">
      <div class="not-found-content">
        <!-- 404 Icon -->
        <div class="error-icon">
          <FontAwesomeIcon :icon="['fas', 'search']" />
        </div>
        
        <!-- Error Code -->
        <div class="error-code">404</div>
        
        <!-- Error Message -->
        <div class="error-message">
          <h1>Page Not Found</h1>
          <p>We couldn't find the page you're looking for. It might have been moved, deleted, or you may have entered the wrong URL.</p>
        </div>
        
        <!-- Action Buttons -->
        <div class="action-buttons">
          <router-link to="/" class="primary-btn">
            <FontAwesomeIcon :icon="['fas', 'home']" />
            Go Home
          </router-link>
          <router-link to="/products" class="secondary-btn">
            <FontAwesomeIcon :icon="['fas', 'th-large']" />
            Browse Products
          </router-link>
        </div>
        
        <!-- Helpful Links -->
        <div class="helpful-links">
          <h3>Popular Pages</h3>
          <div class="links-grid">
            <router-link to="/" class="help-link">
              <FontAwesomeIcon :icon="['fas', 'home']" />
              <span>Home</span>
            </router-link>
            <router-link to="/products" class="help-link">
              <FontAwesomeIcon :icon="['fas', 'th-large']" />
              <span>Products</span>
            </router-link>
            <router-link to="/consultation" class="help-link">
              <FontAwesomeIcon :icon="['fas', 'calendar-alt']" />
              <span>Consultation</span>
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="decorative-elements">
        <div class="ornate-pattern"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
@import '../assets/elegant-home.css';

.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  padding: 120px 2rem 2rem;
  position: relative;
  overflow: hidden;
}

.not-found-container {
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.not-found-content {
  background: white;
  border-radius: 20px;
  padding: 4rem 3rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  position: relative;
}

.not-found-content::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 2px solid var(--primary-color);
  border-radius: 15px;
  opacity: 0.2;
  pointer-events: none;
}

.error-icon {
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.error-code {
  font-size: 6rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-family: 'Crimson Text', 'Georgia', serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.error-message h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-family: 'Crimson Text', 'Georgia', serif;
  letter-spacing: -1px;
}

.error-message p {
  font-size: 1.2rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.action-buttons .primary-btn,
.action-buttons .secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-family: 'Crimson Text', 'Georgia', serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  min-width: 160px;
  justify-content: center;
}

.action-buttons .primary-btn {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  box-shadow: 0 4px 20px var(--shadow-color);
}

.action-buttons .primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px var(--shadow-color);
}

.action-buttons .secondary-btn {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.action-buttons .secondary-btn:hover {
  background: var(--primary-color);
  color: white;
}

.helpful-links {
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
}

.helpful-links h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  font-family: 'Crimson Text', 'Georgia', serif;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.help-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  text-decoration: none;
  color: var(--text-light);
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.help-link:hover {
  color: var(--primary-color);
  background: var(--background-light);
  border-color: var(--border-color);
  transform: translateY(-2px);
}

.help-link svg {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.help-link span {
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Crimson Text', 'Georgia', serif;
}

.decorative-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}

.ornate-pattern {
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 25% 25%, var(--primary-color) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, var(--secondary-color) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.05;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .not-found-page {
    padding: 100px 1rem 1rem;
  }
  
  .not-found-content {
    padding: 3rem 2rem;
  }
  
  .error-code {
    font-size: 4rem;
  }
  
  .error-message h1 {
    font-size: 2rem;
  }
  
  .error-message p {
    font-size: 1.1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .action-buttons .primary-btn,
  .action-buttons .secondary-btn {
    width: 100%;
    max-width: 250px;
  }
  
  .links-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .help-link {
    padding: 0.75rem;
  }
  
  .help-link svg {
    font-size: 1.25rem;
  }
  
  .help-link span {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .not-found-content {
    padding: 2rem 1.5rem;
  }
  
  .error-code {
    font-size: 3rem;
  }
  
  .error-message h1 {
    font-size: 1.75rem;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
