import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios

import global_ from './components/Global'
Vue.prototype.GLOBAL = global_


import store from './store/store';

// import initSqlJs from "sql.js"
// Required to let webpack 4 know it needs to copy the wasm file to our assets
// import sqlWasm from "!!url-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
