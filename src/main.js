import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import '@/assets/css/tailwind.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
