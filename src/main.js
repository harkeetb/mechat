import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from '@/firebase/config';

import './assets/main.css' // global styling

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app');
  }
});
