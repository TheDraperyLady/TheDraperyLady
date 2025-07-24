<template>
  <div
    class="design-switcher"
    :style="{ top: position.y + 'px', left: position.x + 'px' }"
    @mousedown="startDrag"
    @touchstart="startDrag"
  >
    <div class="switcher-container">
      <div class="drag-handle">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="12" cy="6" r="1" fill="currentColor" />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
          <circle cx="6" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="18" cy="12" r="1" fill="currentColor" />
          <circle cx="6" cy="18" r="1" fill="currentColor" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
          <circle cx="18" cy="18" r="1" fill="currentColor" />
        </svg>
      </div>
      <h3>Choose Your Color Scheme</h3>
      <div class="design-options">
        <button
          class="design-option"
          :class="{ active: currentScheme === 'gold' }"
          @click="setColorScheme('gold')"
        >
          <div class="option-preview gold-preview"></div>
          <span>Warm Gold</span>
        </button>
        <button
          class="design-option"
          :class="{ active: currentScheme === 'sage' }"
          @click="setColorScheme('sage')"
        >
          <div class="option-preview sage-preview"></div>
          <span>Elegant Sage</span>
        </button>
        <button
          class="design-option"
          :class="{ active: currentScheme === 'burgundy' }"
          @click="setColorScheme('burgundy')"
        >
          <div class="option-preview burgundy-preview"></div>
          <span>Rich Burgundy</span>
        </button>
        <button
          class="design-option"
          :class="{ active: currentScheme === 'cream' }"
          @click="setColorScheme('cream')"
        >
          <div class="option-preview cream-preview"></div>
          <span>Soft Cream</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentScheme = ref('gold')
const position = ref({ x: 20, y: 20 })
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

const setColorScheme = (scheme) => {
  currentScheme.value = scheme

  // Find the main elegant-home container
  const elegantHome = document.querySelector('.elegant-home')
  console.log('Found elegant-home element:', elegantHome)

  if (elegantHome) {
    // Remove existing color scheme classes
    elegantHome.classList.remove(
      'color-scheme-gold',
      'color-scheme-sage',
      'color-scheme-burgundy',
      'color-scheme-cream',
    )

    // Add new color scheme class
    elegantHome.classList.add(`color-scheme-${scheme}`)
    console.log('Applied color scheme:', `color-scheme-${scheme}`)
    console.log('Current classes:', elegantHome.className)
  } else {
    console.log('Could not find .elegant-home element')
  }

  // Store preference
  localStorage.setItem('drapery-color-scheme', scheme)
}

const startDrag = (event) => {
  event.preventDefault()
  isDragging.value = true

  const rect = event.currentTarget.getBoundingClientRect()
  const clientX = event.clientX || (event.touches && event.touches[0].clientX)
  const clientY = event.clientY || (event.touches && event.touches[0].clientY)

  dragOffset.value = {
    x: clientX - rect.left,
    y: clientY - rect.top,
  }

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('touchmove', onDrag, { passive: false })
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchend', stopDrag)
}

const onDrag = (event) => {
  if (!isDragging.value) return

  event.preventDefault()

  const clientX = event.clientX || (event.touches && event.touches[0].clientX)
  const clientY = event.clientY || (event.touches && event.touches[0].clientY)

  const newX = clientX - dragOffset.value.x
  const newY = clientY - dragOffset.value.y

  // Keep within viewport bounds
  const maxX = window.innerWidth - 270 // component width
  const maxY = window.innerHeight - 300 // component height

  position.value = {
    x: Math.max(0, Math.min(newX, maxX)),
    y: Math.max(0, Math.min(newY, maxY)),
  }
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)

  // Save position to localStorage
  localStorage.setItem('drapery-switcher-position', JSON.stringify(position.value))
}

onMounted(() => {
  // Load saved preference
  const savedScheme = localStorage.getItem('drapery-color-scheme') || 'gold'
  setColorScheme(savedScheme)

  // Load saved position
  const savedPosition = localStorage.getItem('drapery-switcher-position')
  if (savedPosition) {
    try {
      position.value = JSON.parse(savedPosition)
    } catch (e) {
      console.log('Could not parse saved position, using default')
    }
  }
})

onUnmounted(() => {
  // Clean up event listeners
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)
})
</script>

<style scoped>
.design-switcher {
  position: fixed;
  z-index: 2000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-width: 250px;
  cursor: grab;
  user-select: none;
  transition: box-shadow 0.2s ease;
}

.design-switcher:active {
  cursor: grabbing;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.drag-handle {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  cursor: grab;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.drag-handle:hover {
  color: #666;
  background: rgba(0, 0, 0, 0.05);
}

.drag-handle:active {
  cursor: grabbing;
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
  background: none;
  cursor: pointer;
  font-family: inherit;
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

.gold-preview {
  background: linear-gradient(135deg, #b8860b 0%, #daa520 100%);
}

.sage-preview {
  background: linear-gradient(135deg, #7c9885 0%, #a8c4a0 100%);
}

.burgundy-preview {
  background: linear-gradient(135deg, #8b2635 0%, #c44569 100%);
}

.cream-preview {
  background: linear-gradient(135deg, #d2b48c 0%, #f5deb3 100%);
}

.design-option span {
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .design-switcher {
    min-width: 200px;
    max-width: calc(100vw - 40px);
  }

  .switcher-container {
    padding-right: 2rem;
  }
}
</style>
