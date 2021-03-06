import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// App style
import './assets/scss/main.scss'

import './directives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
