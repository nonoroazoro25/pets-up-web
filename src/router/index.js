/**
 * 全站路由配置
 *
 * 建议:
 * 1. 代码中路由统一使用name属性跳转(不使用path属性)
 */
import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/main'
import home from '../views/common/home'
import login from '../views/common/login'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect: { name: 'home' },
      children: [
        { path: '/home', component: home, name: 'home', meta: { title: '首页' } },
      ]

    }
  ]
})
