<template>
  <div class="elegant-home">
    <section class="consultation-page">
      <div class="container">
        <div class="section-header">
          <h2>Schedule Your Free Consultation</h2>
          <p>Transform Your Space with Expert Guidance</p>
        </div>

        <div class="consultation-content">
          <div class="consultation-info">
            <div class="info-card">
              <h3>Call Us Directly</h3>
              <p>Speak with our design experts right away:</p>
              <a href="tel:4089811874" class="phone-number">(408) 981-1874</a>
              <p class="availability">Available Monday - Friday: 9 AM - 6 PM PST</p>
            </div>

            <div class="info-card">
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

          <div class="consultation-form-container">
            <h3>Request a Consultation</h3>
            <form action="https://formspree.io/f/mjkoaygw" method="POST" class="consultation-form">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div class="form-group">
                <label for="address">Property Address</label>
                <input type="text" id="address" name="address" required />
              </div>

              <div class="form-group">
                <label for="project">Tell Us About Your Project</label>
                <textarea id="project" name="project" rows="4" required></textarea>
              </div>

              <div class="form-group">
                <label for="preferred-time">Preferred Consultation Time</label>
                <select id="preferred-time" name="preferred-time" required>
                  <option value="">Select a time...</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                </select>
              </div>

              <button type="submit" class="primary-btn">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
@import '../assets/elegant-home.css';

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

.phone-number:hover {
  transform: translateY(-2px);
  color: var(--secondary-color);
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
