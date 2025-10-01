<template>
  <div :id="galleryID" class="image-gallery">
    <a
      v-for="(image, index) in images"
      :key="index"
      :href="image.src"
      :data-pswp-width="imageDimensions[image.src]?.width || 800"
      :data-pswp-height="imageDimensions[image.src]?.height || 600"
      target="_blank"
      rel="noreferrer"
      class="gallery-item-link"
      :ref="
        (el) => {
          if (el) galleryRefs[index] = el
        }
      "
    >
      <div class="gallery-item">
        <img :src="image.src" :alt="image.alt" loading="lazy" class="gallery-image" />
        <div
          class="gallery-caption"
          :class="{ 'caption-visible': visibleCaptions[index] }"
          v-if="!isMobile"
        >
          <h3 v-if="image.title">{{ image.title }}</h3>
          <p v-if="image.description">{{ image.description }}</p>
        </div>
        <div class="gallery-overlay">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
  galleryID: {
    type: String,
    default: 'image-gallery',
  },
})

const lightbox = ref(null)
const imageDimensions = ref({})
const galleryRefs = ref([])
const visibleCaptions = ref({})
const observer = ref(null)
const isMobile = ref(false)

// Function to preload image and get its dimensions
const loadImageDimensions = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = () => {
      resolve({ width: 800, height: 600 }) // fallback dimensions
    }
    img.src = src
  })
}

// Preload all gallery images to get their dimensions
const preloadGalleryImages = async () => {
  const dimensions = {}

  for (let i = 0; i < props.images.length; i++) {
    const image = props.images[i]
    dimensions[image.src] = await loadImageDimensions(image.src)
  }

  imageDimensions.value = dimensions
}

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// Initialize intersection observer for desktop caption animations
const initIntersectionObserver = () => {
  // Only enable on desktop devices
  if (isMobile.value) return

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = galleryRefs.value.indexOf(entry.target)
        if (index !== -1) {
          if (entry.isIntersecting) {
            // Add a small delay for better visual effect
            setTimeout(() => {
              visibleCaptions.value[index] = true
            }, 200)
          } else {
            // Optional: hide caption when out of view
            // visibleCaptions.value[index] = false
          }
        }
      })
    },
    {
      threshold: 0.3, // Trigger when 30% of the element is visible
      rootMargin: '0px 0px 100px 0px', // Trigger slightly before element is fully in view
    },
  )

  // Observe all gallery items
  galleryRefs.value.forEach((ref) => {
    if (ref) {
      observer.value.observe(ref)
    }
  })
}

// Handle window resize to reinitialize observer
const handleResize = () => {
  checkMobile()

  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }
  visibleCaptions.value = {}
  initIntersectionObserver()
}

onMounted(async () => {
  // Check if mobile on mount
  checkMobile()

  // Preload images to get their dimensions
  await preloadGalleryImages()

  // Initialize PhotoSwipe lightbox
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.value.init()
  }

  // Initialize intersection observer for desktop
  initIntersectionObserver()

  // Add resize listener
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  // Clean up PhotoSwipe lightbox
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }

  // Clean up intersection observer
  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }

  // Remove resize listener
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.image-gallery {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 2rem !important;
  margin-top: 3rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

/* Override any conflicting portfolio-grid styles */
.portfolio-section .image-gallery {
  grid-template-columns: repeat(3, 1fr) !important;
}

/* Ensure mobile styles override portfolio styles */
@media (max-width: 768px) {
  .portfolio-section .image-gallery {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 480px) {
  .portfolio-section .image-gallery {
    grid-template-columns: 1fr !important;
  }
}

.gallery-item-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 3/4;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease-out,
    box-shadow 0.2s ease-out;
}

.gallery-item-link:hover .gallery-item {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.2s ease-out;
  padding: 1rem;
}

.gallery-item-link:hover .gallery-image {
  transform: scale(1.02);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(44, 44, 44, 0.9));
  color: white;
  padding: 2rem 1.5rem;
  font-size: 1.1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.2s ease-out;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: 'Crimson Text', 'Georgia', serif;
  font-style: italic;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.gallery-item-link:hover .gallery-caption {
  opacity: 1;
  transform: translateY(0);
}

.gallery-caption h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  font-family: 'Crimson Text', 'Georgia', serif;
  font-style: italic;
}

.gallery-caption p {
  margin: 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Crimson Text', 'Georgia', serif;
  font-style: italic;
}

.gallery-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  pointer-events: none;
}

.gallery-item-link:hover .gallery-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .image-gallery {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem;
    max-width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
  }

  .gallery-item {
    aspect-ratio: 1/1;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .gallery-image {
    padding: 0.75rem;
    object-fit: cover;
  }

  .gallery-overlay {
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.6);
  }

  .gallery-overlay svg {
    width: 20px;
    height: 20px;
  }

  /* Disable hover effects on mobile */
  .gallery-item-link:hover .gallery-item {
    transform: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .gallery-item-link:hover .gallery-image {
    transform: none;
  }

  .gallery-item-link:hover .gallery-overlay {
    opacity: 0;
  }
}

@media (max-width: 480px) {
  .image-gallery {
    grid-template-columns: 1fr !important;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }

  .gallery-item {
    aspect-ratio: 4/5;
    border-radius: 10px;
  }

  .gallery-image {
    padding: 1rem;
  }
}
</style>
