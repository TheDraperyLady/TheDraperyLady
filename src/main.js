import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmartLink from './components/SmartLink.vue'
import './plugins/fontawesome.js'

const app = createApp(App)

app.component('SmartLink', SmartLink)
app.use(router)

app.mount('#app')
