import { createApp } from 'vue'

import App from './App.vue'
import EmbettyVue3 from '../lib/main'

createApp(App)
  .use(EmbettyVue3, {
    serverUrl: 'http://localhost:3000'
  })
  .mount('#app')
