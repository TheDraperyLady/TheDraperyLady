// Image optimization utility for Cloudflare transformations
const OPTIMIZE_IMAGES = true // Set to false to disable optimization for debugging

const optimizeImageUrl = (url, options = {}) => {
  if (!url || !OPTIMIZE_IMAGES) return url
  
  // Check if it's a Cloudflare CDN URL
  if (url.includes('cdn.draperylady.net')) {
    // Extract the image path from the full URL
    const urlObj = new URL(url)
    const imagePath = urlObj.pathname
    
    // Default options
    const defaultOptions = {
      format: 'auto',
      quality: 85,
      fit: 'cover',
      ...options
    }
    
    // Build the transformation parameters
    const params = Object.entries(defaultOptions)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join(',')
    
    // Apply Cloudflare image transformations using the correct format
    // Format: https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>
    return `https://cdn.draperylady.net/cdn-cgi/image/${params}${imagePath}`
  }
  
  return url
}

// Preset configurations for different use cases
export const imagePresets = {
  // Service card images - medium size, good quality
  serviceCard: (url) => optimizeImageUrl(url, {
    width: 400,
    height: 300,
    quality: 85,
    fit: 'contain'
  }),
  
  // Product images - large size, high quality
  product: (url) => optimizeImageUrl(url, {
    width: 600,
    height: 400,
    quality: 100,
    fit: 'contain'
  }),
  
  // Elegant frame images - high quality, large size
  elegantFrame: (url) => optimizeImageUrl(url, {
    width: 700,
    height: 500,
    quality: 90,
    fit: 'contain'
  })
}

export { optimizeImageUrl }
