import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI)
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
Vue.prototype.$axios = axios
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import global_ from './components/Global'
Vue.prototype.GLOBAL = global_


import store from './store/store';
// Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
