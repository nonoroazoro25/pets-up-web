import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import register from '@/views/register'

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
    }
  ]
})
