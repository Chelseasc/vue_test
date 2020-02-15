import Vue from 'vue'
import App from './App.vue'

import router from './router'
// import router from './router/krouter'

// import store from './store'
import store from './kstore'
// import create from '@/utils/create'
Vue.config.productionTip = false
// Vue.prototype.$create = create // 这么写为了在App.vue中使用方便
new Vue({
  router, // 安装了vue-router自动出现的
  store, // 安装了vuex自动出现的

  // 把App作为根组件渲染输出
  render: h => h(App)
}).$mount('#app')
