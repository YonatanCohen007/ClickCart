import Vue from 'vue';
import Router from 'vue-router';
import Cart from './components/Cart';
import Products from './components/Products';


Vue.use(Router);

const routes =[
  {
    path: '/',
    component: Products
  },
  {
    path: '/Cart',
    component: Cart
  }];


export default new Router({
    routes,
});
