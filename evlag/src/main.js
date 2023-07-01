import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://192.168.251.78:5550'
Vue.prototype.baseURL= 'http://192.168.251.78:5550'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// https://chavara.leopardtechlabs.in