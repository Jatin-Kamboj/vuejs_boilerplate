import Vue from 'vue';
import App from './app/app.vue';

import './main.scss';
import router from './app/app-routes';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
