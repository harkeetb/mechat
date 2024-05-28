import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css' // global styling

createApp(App).use(router).mount('#app')
