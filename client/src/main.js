import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$api = axios

Vue.use(BootstrapVue)
Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
