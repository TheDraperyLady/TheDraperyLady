<template>
  <nav class="elegant-nav">
    <div class="nav-container">
      <div class="logo">
        <img src="../assets/TDL_logo.png" alt="The Drapery Lady" class="logo-image" />
        <div class="logo-text">
          <h2>The Drapery Lady</h2>
          <span class="tagline">Classic, Simple and Elegant</span>
        </div>
      </div>
      <div class="nav-links" @mouseleave="handleNavLeave">
        <router-link to="/" @mouseenter="handleNavEnter('home')"> Home </router-link>
        <transition name="expand">
          <div class="section-links" v-show="isHome && expandNav && activeNav === 'home'">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#service-area">Service Area</a>
            <a href="#contact">Contact</a>
          </div>
        </transition>
        <router-link to="/products" @mouseenter="handleNavEnter('products')">
          Products
        </router-link>
        <transition name="expand">
          <div class="section-links" v-show="isProducts">
            <router-link :to="{ name: 'product-detail', params: { type: 'draperies' } }"
              >Draperies</router-link
            >
            <router-link :to="{ name: 'product-detail', params: { type: 'shutters' } }"
              >Shutters</router-link
            >
            <router-link :to="{ name: 'product-detail', params: { type: 'blinds' } }"
              >Blinds</router-link
            >
            <router-link :to="{ name: 'product-detail', params: { type: 'screens' } }"
              >Screens</router-link
            >
            <router-link :to="{ name: 'product-detail', params: { type: 'shades' } }"
              >Shades</router-link
            >
            <router-link :to="{ name: 'product-detail', params: { type: 'motorization' } }"
              >Motorization</router-link
            >
          </div>
        </transition>
        <router-link to="/articles" @mouseenter="handleNavEnter('articles')">
          Articles
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isHome = computed(() => route.path === '/')
const isProducts = computed(
  () => route.path.startsWith('/products') || route.path.startsWith('/product/'),
)
const expandNav = ref(true)
const activeNav = ref(null)

// Reset expansion state when route changes
watch(
  route,
  () => {
    expandNav.value = true
    // Set initial active nav based on current route
    activeNav.value = isHome.value ? 'home' : isProducts.value ? 'products' : null
  },
  { immediate: true },
)

const handleNavEnter = (nav) => {
  activeNav.value = nav
  // Only collapse on home page when hovering over non-home items
  if (isHome.value && nav !== 'home') {
    expandNav.value = false
  } else {
    expandNav.value = true
  }
}

const handleNavLeave = () => {
  expandNav.value = true
  // Reset to current page's nav
  activeNav.value = isHome.value ? 'home' : isProducts.value ? 'products' : null
}

onMounted(() => {
  // Set up scroll observation for both home and products pages
  if (isHome.value) {
    setupScrollObserver('section[id]', '#')
  } else if (isProducts.value) {
    setupScrollObserver('.product-section', '/products/')
  }
})

const setupScrollObserver = (sectionSelector, linkPrefix) => {
  const sections = document.querySelectorAll(sectionSelector)
  let intersectingEntries = new Map()

  const observerOptions = {
    threshold: Array.from({ length: 11 }, (_, i) => i / 10),
    rootMargin: '-100px 0px -100px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id || entry.target.dataset.section
      if (entry.isIntersecting) {
        intersectingEntries.set(sectionId, entry.intersectionRatio)
      } else {
        intersectingEntries.delete(sectionId)
      }

      // Find the section with highest visibility ratio
      let maxRatio = 0
      let mostVisibleId = ''

      intersectingEntries.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio
          mostVisibleId = id
        }
      })

      // Update active state for section links
      const sectionLinks = document.querySelectorAll('.section-links a')
      sectionLinks.forEach((link) => {
        const href = link.getAttribute('href')
        const linkId = href.startsWith('#') ? href.substring(1) : href.split('/').pop()

        if (linkId === mostVisibleId) {
          link.classList.add('section-active')
        } else {
          link.classList.remove('section-active')
        }
      })
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })

  // Handle smooth scrolling
  document.addEventListener('click', (e) => {
    const link = e.target.closest(`a[href^="${linkPrefix}"]`)
    if (link && (isHome.value || isProducts.value)) {
      e.preventDefault()
      const targetId = link.getAttribute('href').replace(linkPrefix, '')
      const targetSection =
        linkPrefix === '#'
          ? document.getElementById(targetId)
          : document.querySelector(`[data-section="${targetId}"]`)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  })
}
</script>

<style scoped>
:root {
  --primary-color: #8b2635;
  --secondary-color: #c44569;
  --text-dark: #2c2c2c;
  --text-light: #666;
}

.elegant-nav {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-image {
  height: 60px;
  width: auto;
}

.logo-text h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.2rem;
  letter-spacing: 1px;
}

.logo-text .tagline {
  font-size: 0.8rem;
  color: var(--primary-color);
  font-style: italic;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links .router-link-active {
  color: var(--primary-color);
}

/* Style for exact route match (Home) */
.nav-links .router-link-exact-active {
  color: var(--primary-color);
  font-weight: 600;
}

/* Style for active route and its children (Products) */
.nav-links .router-link-active {
  color: var(--primary-color);
  font-weight: 600;
}

/* Section links styles */
.section-links {
  display: flex;
  gap: 2.5rem;
  overflow: hidden;
}

/* Transition classes */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-width: 800px;
}

.expand-enter-from,
.expand-leave-to {
  max-width: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-width: 800px;
  opacity: 1;
}

/* Common underline animation for all navigation links */
.nav-links a::after,
.section-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links .router-link-active::after,
.section-links a:hover::after,
.section-links a.section-active::after {
  width: 100%;
}

.section-links a.section-active {
  color: var(--primary-color);
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .section-links {
    gap: 1.5rem;
  }
}
</style>
