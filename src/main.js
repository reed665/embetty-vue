import { createApp } from 'vue'

import EmbettyVue3 from '../lib/main'
import App from './App.vue'

createApp(App)
  .use(EmbettyVue3, {
    serverUrl: 'http://localhost:3000',
  })
  .mount('#app')
