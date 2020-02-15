import Vue from 'vue'
export default function (Component, props) {
  // 先创建实例
  const vm = new Vue({ // 每一个子组件都是vue的一个实例，但是只是独立的实例，和main里挂载的实例没有关系，而是和body产生的关系（第9行）
    render (h) { //  render生成虚拟dom，参数是一个可以创建虚拟dom的函数，即createElement，一般简写成h
      return h(Component, { props }) // 把传进来的根组件作为vue的实例
    }
  // }).$mount('body') // 期望挂载在body上，但是官方说不能挂在body上 只要用就报错。所以在这里先不挂载，只创建实例，下面手动挂载
  }).$mount()
  document.body.appendChild(vm.$el) // 实例vm有一个真实dom:$el

  // 销毁方法（单例的需要销毁，避免内存泄露）
  const comp = vm.$children[0] // 拿到当前的组件（由于h(Component,.........)里就只有一个组件所以这里可以用[0]）
  comp.remove = function () { // 附加一个remove方法，做两件事情：
    document.body.removeChild(vm.$el) // 把$el这个dom移除
    vm.$destroy() // 摧毁$el实例
  }
  return comp
}