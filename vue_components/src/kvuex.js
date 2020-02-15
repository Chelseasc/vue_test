
let Vue
// 实现一个store类
class Store {
  constructor (options) {
    this.state = new Vue({
      data: options.state // 在store.js里new Vuex.Store({ state: {})} 时有个state，就是这里的options.state，把他——
      // ——赋值给data方便管理数据，因为：数据设置在data上，所以说其实state上的数据是在data()里的，这样变化的时候界面才能动态更新
    })
    this.mutations = options.mutations
    this.actions = options.actions
    options.getters && this.handleGetters(options.getters)
  }

  // 声明为箭头函数，为何？——保留this的指向。一直指向store实例
  commit = (type, arg) => {
    // 执行this.mutations[type]()这个方法
    this.mutations[type](this.state, arg) // this.mutations[type] 从this.mutations找到——
    // ——和type相匹配的方法函数，相当于store.js里 mutations下的increment()函数
  }

  dispatch (type, arg) {
    this.actions[type]({
      commit: this.commit,
      state: this.state
    }, arg)
  }

  handleGetters (getters) {
    this.getters = {} // 动态创建this.getters，通过defineProperty
    // 遍历getters所有key
    Object.keys(getters).forEach(key => { // key是getters的名字，比如<p>手榴弹扔了{{$store.getters.score}}</p>里的score
      // 为this.getters定义若干属性，这些属性是只读的（看下面一行，只有get:()=>{}）
      Object.defineProperty(this.getters, key, { // defineProperty 对this.getters创建属性key
        get: () => {
          // 执行getters[key]()这个函数
          return getters[key](this.state) // 这里的getters[key]就是store.js里getters: {score (state) {}}的score函数
        }
      })
    })
  }
}
function install (_Vue) { // install 安装 接收一个构造函数进来
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.$store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}
// 导出一个vuex
export default { Store, install }