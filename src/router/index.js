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
import monthRecord from '@/views/monthRecord'
import petsConfig from '@/views/petsConfig'
import configDoctor from '@/views/petsConfig/configDoctor'
import configFood from '@/views/petsConfig/configFood'
import configTag from '@/views/petsConfig/configTag'


const routes = [
  {
    path: '/',
    component: layout,
    meta: {
      title: "首页"
    },
    children: [
    {
      path: '/',
      name: 'home',
      component:Home,
      meta: {
        title: "最近记录"
      },
    },
    {
      path: '/article',
      name: 'articleList',
      component:articleList,
      meta: {
        title: "文章列表"
      },
    },
    {
      path: '/cookRecord',
      name: 'cookRecord',
      component:cookRecord,
      meta: {
        title: "食谱记录"
      },
    },
    {
      path: '/petsList',
      name: 'petsList',
      component:petsList,
      meta: {
        title: "宠物列表"
      },
    },
    {
      path: '/monthRecord',
      name: 'monthRecord',
      component:monthRecord,
      meta: {
        title: "monthRecord"
      },
    },
    {
      path: '/petsConfig',
      name: 'petsConfig',
      component:petsConfig,
      meta: {
        title: "配置"
      },
      children: [
        {
          path: '/petsConfig/configDoctor',
          name: 'configDoctor',
          component:configDoctor,
          meta: {
            title: "驱虫记录"
          },
        },
        {
          path: '/petsConfig/configFood',
          name: 'configFood',
          component:configFood,
          meta: {
            title: "常用食物"
          },
        },
        {
          path: '/petsConfig/configTag',
          name: 'configTag',
          component:configTag,
          meta: {
            title: "文章tag"
          },
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