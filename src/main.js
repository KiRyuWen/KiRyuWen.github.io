import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initAnalytics } from './analytics'
import './style.css'

// Registered before mount so the initial navigation is counted too.
initAnalytics(router)

createApp(App).use(router).mount('#app')
