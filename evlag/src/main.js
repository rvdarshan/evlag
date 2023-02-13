import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import axios from 'axios';
Vue.config.productionTip = false
axios.defaults.baseURL='http://192.168.49.47:4007'
Vue.prototype.baseURL='http://192.168.49.47:4007'
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
