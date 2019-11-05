import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home/Home";
import Hello from '../pages/home/Hello'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})
