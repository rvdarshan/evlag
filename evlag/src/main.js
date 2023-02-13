import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import axios from 'axios';
// import ServerError from './components/login/500Error';

Vue.config.productionTip = false;
// axios.default.baseURL = "http://13.234.38.130"
// Vue.prototype.baseURL = "http://13.234.38.130"
axios.default.baseURL = "http://192.168.49.47:4007"
Vue.prototype.baseURL = "http://192.168.49.47:4007"
// Vue.component('ServerError',ServerError)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
