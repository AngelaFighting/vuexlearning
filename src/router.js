import Vue from 'vue'
import Router from 'vue-router'
import List from '@/page/list'
import Detail from '@/page/detail'

Vue.use(Router)

// 定义路由
export default new Router({
  mode: 'history',
  base: '/cnycard2018/',
  routes: [// 每个路由应该映射一个组件
    {
      path: '/:lang',
      name: 'list',
      component: List,
    },
    {
      path: '/:lang/detail/:index',
      name: 'detail',
      component: Detail
    },
    {// 设置默认路由
      path: '*',
      redirect: "/zhCHS"
    },
  ]
})



