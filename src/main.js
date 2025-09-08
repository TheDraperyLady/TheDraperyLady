import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router'
import SmartLink from './components/SmartLink.vue'
import './plugins/fontawesome.js'

// Define the product types for static generation
const productTypes = ['draperies', 'shutters', 'blinds', 'shades', 'valances', 'accessories']

// Export createApp function required by ViteSSG
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options - pass the routes directly
  { routes: router.options.routes },
  // function to have custom setups
  ({ app, router: ssgRouter, routes, isClient, initialState }) => {
    // Register global components
    app.component('SmartLink', SmartLink)

    // Install plugins etc.
    // The router is automatically installed by ViteSSG
    // We can access the router instance via ssgRouter if needed
  },
)

// Export the includedRoutes function for vite-ssg
export async function includedRoutes(paths, routes) {
  // Add dynamic product routes
  const productRoutes = productTypes.map(type => `/product/${type}`)
  console.log('Product routes being generated:', productRoutes)
  console.log('Original paths:', paths)
  const allPaths = [...productRoutes]
  console.log('All paths:', allPaths)
  return allPaths
}