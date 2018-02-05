import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$ajax= axios

Vue.prototype.HOST = '/api'

Vue.use(Vuex); 
Vue.config.silent = false
Vue.config.productionTip = false

console.log(Vue.config)

/* eslint-disable no-new */
var  app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

console.log(app)
