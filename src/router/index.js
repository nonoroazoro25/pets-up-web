import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/common/Login'
import register from '@/views/common/register'
import home from '@/views/common/home'

Vue.use(Router)


export default new Router({
  routes: [

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    }
  ]
})