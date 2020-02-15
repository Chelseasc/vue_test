import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
Vue.use(VueRouter) // 引入Router插件，

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      { path: '/list', name: 'list', component: List },
      { path: 'detail/:id', component: Detail } // 比如配置一个详情页，:id是一个动态的模式
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: { auth: true }, // 源数据，告诉业务逻辑需要认证
    beforeEnter (to, from, next) {
      // 路由内部知道自己需要认证
      if (!window.isLogin) {
        // ...
      } else {
        next()
      }
    },
    /*
    // route level code-splitting路由层级的代码分割(会单独打包，程序刚开始加载的时候不会被下载，访问这个对应地址的时候才会下载)
    // this generates a separate chunk (about.[hash].js) for this route生成分片（以about开头，about.[hash].js）
    // 当路由访问时懒加载
    */
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 这里/**/的注释是写给webpack看的
  }
]

const router = new VueRouter({
  routes,
  // mode: 'hash/history/abstract', // 常见模式
  // base: process.env.BASE_URL, 基地址，不会列入路由匹配的范围（通过Webpack配置的）
})

router.beforeEach((to, from, next) => {
  // 要访问 /about 且未登录===需要去登录
  if (to.meta.auth && !window.isLogin) {
    if (window.confirm('请登录')) {
      window.isLogin = true
      next() // 登录成功，继续
    } else {
      next('/') // 登录失败，回首页
    }
  } else {
    next()
  }
})

export default router
