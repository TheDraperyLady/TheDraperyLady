<template>
  <nav class="elegant-nav elegant-home">
    <div class="nav-container">
      <div class="logo">
        <img src="../assets/TDL_logo.png" alt="The Drapery Lady" class="logo-image" />
        <div class="logo-text">
          <h2>The Drapery Lady</h2>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <div class="nav-links desktop-nav" @mouseleave="handleNavLeave">
        <router-link to="/" @mouseenter="handleNavEnter('home')"> Home </router-link>
        <transition name="expand" mode="out-in">
          <div
            v-if="isHome && expandNav && activeNav === 'home'"
            key="home-links"
            class="section-links"
          >
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
          </div>
        </transition>
        <router-link to="/products" @mouseenter="handleNavEnter('products')">
          Products
        </router-link>
        <transition name="expand" mode="out-in">
          <div
            v-if="(isProducts || currentProductType) && expandNav"
            key="product-links"
            class="section-links"
          >
            <router-link
              :to="{ name: 'product-detail', params: { type: 'draperies' } }"
              :class="{ 'product-active': currentProductType === 'draperies' }"
              >Draperies</router-link
            >
            <router-link
              :to="{ name: 'product-detail', params: { type: 'shutters' } }"
              :class="{ 'product-active': currentProductType === 'shutters' }"
              >Shutters</router-link
            >
            <router-link
              :to="{ name: 'product-detail', params: { type: 'blinds' } }"
              :class="{ 'product-active': currentProductType === 'blinds' }"
              >Blinds</router-link
            >
            <router-link
              :to="{ name: 'product-detail', params: { type: 'shades' } }"
              :class="{ 'product-active': currentProductType === 'shades' }"
              >Shades</router-link
            >
            <router-link
              :to="{ name: 'product-detail', params: { type: 'valances' } }"
              :class="{ 'product-active': currentProductType === 'valances' }"
              >Valances</router-link
            >
            <router-link
              :to="{ name: 'product-detail', params: { type: 'accessories' } }"
              :class="{ 'product-active': currentProductType === 'accessories' }"
              >Accessories</router-link
            >
          </div>
        </transition>

        <router-link to="/consultation" class="consultation-btn"> Book Consultation </router-link>
      </div>

      <!-- Mobile Hamburger Menu -->
      <div class="mobile-nav">
        <button
          class="hamburger-btn"
          @click="toggleMobileMenu"
          :class="{ active: isMobileMenuOpen }"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <transition name="mobile-menu">
          <div class="mobile-menu" v-show="isMobileMenuOpen">
            <div class="mobile-menu-content">
              <router-link to="/" @click="closeMobileMenu" class="mobile-nav-link">
                Home
              </router-link>
              <router-link to="/products" @click="closeMobileMenu" class="mobile-nav-link">
                Products
              </router-link>

              <router-link
                to="/consultation"
                @click="closeMobileMenu"
                class="mobile-nav-link consultation-link"
              >
                Book a Consultation
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Guard for click handler to prevent duplicates
const hasClickHandler = ref(false)
let boundSmoothScroll = null

const isHome = computed(() => {
  // Remove the base URL if present and check if it's the home route
  const path = route.path.replace('/TheDraperyLady', '')
  const result = path === '/' || path === ''
  console.log('[Debug] isHome computed:', {
    originalPath: route.path,
    cleanPath: path,
    isHome: result,
  })
  return result
})

const isProducts = computed(() => {
  // Remove the base URL if present and check if it's a products route
  const path = route.path.replace('/TheDraperyLady', '')
  const result = path.startsWith('/products') // Only true for products listing page
  console.log('[Debug] isProducts computed:', {
    originalPath: route.path,
    cleanPath: path,
    isProducts: result,
  })
  return result
})

const currentProductType = computed(() => {
  const path = route.path.replace('/TheDraperyLady', '')
  if (path.startsWith('/product/')) {
    return path.split('/').pop()
  }
  return null
})

// Watch for product type changes to clear section-active classes
watch(currentProductType, (newType) => {
  if (newType) {
    // Clear all section-active classes when on a product detail page
    document.querySelectorAll('.section-links a').forEach((link) => {
      link.classList.remove('section-active')
    })
  }
})

const expandNav = ref(true)
const activeNav = ref(null)
const isMobileMenuOpen = ref(false) // Mobile menu state
let currentObserver = null // Declare observer reference before watch

// Reset expansion state when route changes
watch(
  route,
  () => {
    console.log('[Debug] Route changed:', {
      path: route.path,
      isProducts: isProducts.value,
      isHome: isHome.value,
    })
    expandNav.value = true
    // Set initial active nav based on current route
    activeNav.value = isHome.value ? 'home' : isProducts.value ? 'products' : null
    console.log('[Debug] Nav state after route change:', {
      expandNav: expandNav.value,
      activeNav: activeNav.value,
    })
  },
  { immediate: true },
)

const handleNavEnter = (nav) => {
  console.log('[Debug] handleNavEnter triggered:', {
    nav,
    isProducts: isProducts.value,
    expandNav: expandNav.value,
    activeNav: activeNav.value,
  })
  activeNav.value = nav
  // Collapse on home page when hovering over non-home items
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

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Watch for route changes to set up observers after view updates
watch(route, () => {
  // Clean up existing observer
  if (currentObserver) {
    console.log('[Debug] Cleaning up observer')
    currentObserver.disconnect()
    currentObserver = null
  }

  // Wait for view to update before setting up observers
  setTimeout(() => {
    if (isHome.value) {
      setupScrollObserver('section[id]', '#')
    } else if (isProducts.value && !currentProductType.value) {
      // Only set up product section observer on the products listing page
      setupScrollObserver('.product-section', '/products/')
    }
  }, 100)
})

onMounted(() => {
  // Initial setup - only call setupScrollObserver here, not in the watch with immediate: true
  if (isHome.value) {
    setupScrollObserver('section[id]', '#')
  } else if (isProducts.value) {
    setupScrollObserver('.product-section', '/products/')
  }
})

const setupScrollObserver = (sectionSelector, linkPrefix) => {
  console.log('[Debug] Setting up scroll observer:', {
    sectionSelector,
    linkPrefix,
    isProducts: isProducts.value,
    isHome: isHome.value,
  })
  // Clean up previous observer if it exists
  if (currentObserver) {
    console.log('[Debug] Disconnecting previous observer')
    currentObserver.disconnect()
  }

  // Wait for sections to be available in the DOM
  setTimeout(() => {
    const sections = document.querySelectorAll(sectionSelector)
    if (!sections.length) return // Exit if no sections found

    let intersectingEntries = new Map()

    // Simplified observer options with fewer thresholds
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-100px 0px -100px 0px',
    }

    currentObserver = new IntersectionObserver((entries) => {
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

        // Update active state for section links only if not on a product detail page
        if (!currentProductType.value) {
          const sectionLinks = document.querySelectorAll('.section-links a')
          sectionLinks.forEach((link) => {
            const href = link.getAttribute('href')
            if (!href) return // Skip if no href attribute

            const linkId = href.startsWith('#') ? href.substring(1) : href.split('/').pop()

            // Only update if we have a valid linkId and mostVisibleId
            if (linkId && mostVisibleId) {
              if (linkId === mostVisibleId) {
                link.classList.add('section-active')
              } else {
                link.classList.remove('section-active')
              }
            }
          })
        }
      })
    }, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      if (section) {
        // Make sure section exists
        currentObserver.observe(section)
      }
    })
  }, 100) // End of setTimeout

  // Guard the event listener so it's attached only once
  if (!hasClickHandler.value) {
    boundSmoothScroll = (e) => {
      const link = e.target.closest(`a[href^="${linkPrefix}"]`)
      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return

      // If it's a hash link on the same page
      if (href.startsWith('#')) {
        const targetId = href.substring(1)
        const targetSection = document.getElementById(targetId)

        if (targetSection) {
          e.preventDefault()
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
          // Adjust for fixed header
          window.scrollBy(0, -100)
        }
      }
      // For product sections
      else if (isProducts.value && href.startsWith('/products/')) {
        e.preventDefault()
        const targetId = href.replace('/products/', '')
        const targetSection = document.querySelector(`[data-section="${targetId}"]`)

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
          // Adjust for fixed header
          window.scrollBy(0, -100)
        }
      }
    }
    document.addEventListener('click', boundSmoothScroll, { passive: false })
    hasClickHandler.value = true
  }
}

// Clean up event listener when component unmounts
onUnmounted(() => {
  if (hasClickHandler.value && boundSmoothScroll) {
    document.removeEventListener('click', boundSmoothScroll)
    hasClickHandler.value = false
  }

  // Clean up observer
  if (currentObserver) {
    currentObserver.disconnect()
    currentObserver = null
  }
})
</script>

<style scoped>
@import '../assets/elegant-home.css';

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
  font-family: 'Crimson Text', 'Georgia', serif;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
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
  font-family: 'Crimson Text', 'Georgia', serif;
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
  gap: 1.5rem;
  overflow: hidden;
}

/* Transition classes with 0.1 second delay */
.expand-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 800px;
  transition-delay: 0.1s;
}

.expand-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
.section-links a.section-active::after,
.section-links a.product-active::after {
  width: 100%;
}

.section-links a.section-active,
.section-links a.product-active {
  color: var(--primary-color);
}

/* Consultation Button */
.consultation-btn {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white !important;
  padding: 0.8rem 1.5rem !important;
  border-radius: 50px;
  font-weight: 600 !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.85rem !important;
  box-shadow: 0 4px 15px var(--shadow-color, rgba(139, 38, 53, 0.2));
  transition: all 0.3s ease !important;
  margin-left: 1rem;
  font-family: 'Crimson Text', 'Georgia', serif;
}

.consultation-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 38, 53, 0.3);
}

.consultation-btn::after {
  display: none;
}

/* Hide section links for medium screens */
@media (max-width: 1350px) {
  .section-links {
    display: none !important;
  }
}

/* Mobile Navigation Styles */
.mobile-nav {
  display: none;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: all 0.3s ease;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-menu {
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.mobile-menu-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-link {
  color: var(--text-dark);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: 'Crimson Text', 'Georgia', serif;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--primary-color);
}

.mobile-nav-link.consultation-link {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  box-shadow: 0 4px 15px var(--shadow-color, rgba(139, 38, 53, 0.2));
}

.mobile-nav-link.consultation-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 38, 53, 0.3);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .nav-container {
    justify-content: space-between;
    align-items: center;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }

  .logo {
    justify-content: flex-start;
  }

  .logo-text h2 {
    font-size: 1.5rem;
  }

  .logo-image {
    height: 50px;
  }
}
</style>
