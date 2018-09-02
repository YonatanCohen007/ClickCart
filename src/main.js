import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import router from './router.js';
import store from './store.js';

Vue.use(VueRouter);
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  rander: h => h(App),
  router,
   store,
   
})
