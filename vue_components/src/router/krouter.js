import Vue from 'vue'
import Home from '@/views/Home'
import About from '@/views/About'
class VueRouter {
  constructor (options) { // 构造参数
    this.$options = options
    this.routeMap = {} // 初始化
    // URL变化后如何让组件渲染——响应式
    this.app = new Vue({ // vue-router和react router最大的区别：vue-router和vue之间是强绑定的关系
      data: { // 它托管了一个data，默认值是当前路径的根路径
        current: '/'
      }
    })
  }

  init () {
    this.bindEvents() // 绑定事件，监听url的变化
    this.createRouteMap(this.$options) // 解析路由的配置
    this.initComponent() // 实现两个组件 渲染
  }

  bindEvents () {
    window.addEventListener('load', this.onHashChange.bind(this)) // 加载完时 不bind(this)的话this指向的是window
    window.addEventListener('hashchange', this.onHashChange.bind(this)) // 有变化时
  }

  onHashChange () {
    this.app.current = window.location.hash.slice(1) || '/' // 只需把window里对象的地址赋值给this.app.current(see line 9)
  }

  createRouteMap (options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item.component // 把配置的路由的path和组件产生一一对应的关系
    })
  }

  initComponent () {
    // 实现router-link, router-view ：用Vue.component全局注册组件
    Vue.component('router-link', { // 参数：组件名，具体配置（属性）
      // <router-link to=''>文字</router-link>
      props: { to: String },
      render (h) { // 在这不能写template字符串模板（没有编译器）所以只能写render模板
        // h(tag, [data], children) 第三个参数就是a标签里的文字（<router-link to=''>文字</router-link>中的“文字”）
        return h('a',
          { attrs: { href: '#'+this.to } },
          [this.$slots.default]) // 生成虚拟DOM a标签；this.$slots 插槽内容 这里即a标签
      }
    })
    // <router-view />
    Vue.component('router-view', { // router-view使用的时候也不用传参所以这里参数不需要写属性
      render: (h) => { // 要根据当前的路径拿出当前匹配的组件 渲染就行了 所以这里的h参数直接生成一个component就行了
        const comp = this.routeMap[this.app.current]
        return h(comp)
      }
    })
  }
}
VueRouter.install = function (Vue) { // 参数是构造函数
  // mixin混入 常用于组件的扩展
  Vue.mixin({
    // 监听钩子beforeCreate事件
    beforeCreate () { // 混入即 将来会和所有beforeCreate 组件创建生命周期的时候一起执行
      // 只在根组件执行一次
      if (this.$options.router) { // this.$option可以获取和调用data外面定义的属性和方法
        Vue.prototype.$router = this.$options.router // 这里的this指的是new Vue实例，即根组件
        this.$options.router.init()
      }
    }
  })
}
Vue.use(VueRouter) // 插件都用use.怎样实现插件，用install方法,见上面
export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})