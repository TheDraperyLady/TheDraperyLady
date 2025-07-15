<template>
  <div class="design-switcher">
    <div class="switcher-container">
      <h3>Choose Your Design Style</h3>
      <div class="design-options">
        <router-link to="/" class="design-option" :class="{ active: $route.name === 'warm-home' }">
          <div class="option-preview warm-preview"></div>
          <span>Warm & Inviting</span>
        </router-link>
        <router-link
          to="/modern"
          class="design-option"
          :class="{ active: $route.name === 'modern-home' }"
        >
          <div class="option-preview modern-preview"></div>
          <span>Sleek & Modern</span>
        </router-link>
        <router-link
          to="/elegant"
          class="design-option"
          :class="{ active: $route.name === 'elegant-home' }"
        >
          <div class="option-preview elegant-preview"></div>
          <span>Fancy & Elegant</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.design-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-width: 250px;
}

.switcher-container h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.design-options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.design-option {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-radius: 10px;
  text-decoration: none;
  color: #666;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.design-option:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #333;
}

.design-option.active {
  background: rgba(0, 0, 0, 0.08);
  color: #333;
  border-color: #007bff;
}

.option-preview {
  width: 40px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.warm-preview {
  background: linear-gradient(135deg, #fdf6e3 0%, #f5e6d3 100%);
}

.modern-preview {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.elegant-preview {
  background: linear-gradient(135deg, #f8f6f0 0%, #f0ede5 100%);
}

.design-option span {
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .design-switcher {
    position: fixed;
    bottom: 20px;
    right: 20px;
    top: auto;
    min-width: 200px;
  }
}
</style>
