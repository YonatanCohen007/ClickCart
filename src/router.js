import Vue from 'vue';
import Router from 'vue-router';
import Calculator from './components/Calculator';


Vue.use(Router);

const routes =[
  {
    path: '/',
    component: Calculator
  }];


export default new Router({
    routes,
});
