import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/common/Login'
import register from '@/views/common/register'
import home from '@/views/common/home'
import layout from '@/views/layout'
import VueRouter from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

import articleList from '@/views/articleList'
import cookRecord from '@/views/cookRecord'
import petsList from '@/views/petsList'
import petsConfig from '@/views/petsConfig'
import configDoctor from '@/views/petsConfig/configDoctor'
import configFood from '@/views/petsConfig/configFood'
import configTag from '@/views/petsConfig/configTag'


const routes = [
  {
    path: '/',
    component: layout,
    children: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/article',
      name: 'articleList',
      component:articleList
    },
    {
      path: '/cookRecord',
      name: 'cookRecord',
      component:cookRecord
    },
    {
      path: '/petsList',
      name: 'petsList',
      component:petsList
    },
    {
      path: '/petsConfig',
      name: 'petsConfig',
      component:petsConfig,
      children: [
        {
          path: '/petsConfig/configDoctor',
          name: 'configDoctor',
          component:configDoctor
        },
        {
          path: '/petsConfig/configFood',
          name: 'configFood',
          component:configFood
        },
        {
          path: '/petsConfig/configTag',
          name: 'configTag',
          component:configTag
        }
      ]
    }
    ]
  },
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


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router