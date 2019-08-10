import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import swal from 'sweetalert'
import { VueSpinners } from '@saeris/vue-spinners'
import ProgressBar from 'vue-simple-progress'

Vue.use(ProgressBar)

Vue.config.productionTip = false
Vue.use(VueSpinners)
Vue.use({
  install (Vue) {
    Vue.swal = swal
    Vue.prototype.$swal = swal
  }
})

Vue.filter('toCurrency', function (value) {
  let val = (value / 1).toFixed(0).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
