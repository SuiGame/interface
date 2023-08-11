import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import axios from './plugins/axios'
// import validator from './plugins/validator'
import modal from './plugins/modal'

import '@/common/css/base.scss'

createApp(App)
  .use(router)
  .use(i18n)
  .use(axios)
  // .use(validator)
  .use(modal)
  .mount('#app')
