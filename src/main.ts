import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import './styles/style.css'


createApp(App)
  .component('Icon', Icon)
  .use(router)
  .mount('#app')