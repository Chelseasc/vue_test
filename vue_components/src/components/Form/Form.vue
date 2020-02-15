<!--任务：-->
<!--校验规则-->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    /* step4-begin */
    // form和formItem现在是父子关系，但也许以后会爷孙关系，所以这里需要用跨层级的传输方式
    provide () {
      return { // return一个他想传递的东西
        form: this, // 传递一个叫form的属性，值就是他自己。（把自己献给子孙后代），子孙后代就--
        // --可以通过这个form拿到form组件的实例，也就可以拿到form组件传递的model,rules等属性，所以同时下面要把这两个属性声明一下
        // PS:在子孙组件如formItem里面的拿法参考formItem的export default的inject
      }
    },
    /* step4-end */

    props: {
      model: {
        type: Object,
        required: true,
      },
      rules: {
        type: Object
      }
    },
    methods: {
      /* step8-begin */
      // 拿到所有的校验结果，需要执行formItem里的validate方法
      validate (cb) { // 参数接受一个回调函数cb，cb接受最终的结果
        // 执行formItem里的validate方法
        const tasks = this.$children // tasks是一个promise数组数组数组，this.$children是拿到的form-item
          .filter(item => item.prop) // 有props属性的出来，比如“提交”按钮就不需要校验
          .map(item => item.validate()) // item就是form-item，map代表只需要执行item的validate方法就可以了
        // 所有任务都通过才算校验通过
        Promise.all(tasks)
          .then(() => cb(true)) // 先看一下外面的调用，index.vue里提交的时候是先拿到当前表单--
          //--实例（this.$refs[form]），然后执行校验validate 传入了一个回调函数，这个回调函数接收一个布--
          //--尔值，是校验的结果。所以这里可以通过callback传入校验的结果
          .catch(() => cb(false))
      }
      /* step8-end */
    }
  }
</script>

<style scoped>

</style>