<!--step1: 双向绑定-->
<!--step2: 派发校验事件-->
<template>
    <div>
        <input :value="value" @input="onInput">
        <!--也可以这么写：-->
        <!--<input :value="value" @input="onInput" v-bind="$attrs"> 同时在export default里添加一个inheritAttrs: false,-->
        <!--$attrs 类似于属性展开运算符 有了它子组件就不需要写那么多属性，父组件会直接传过来剩下所有的属性-->
    </div>
</template>

<script>
  export default {
    name: "Form",
    props: {
      value: {
        type: String,
        default: ''
      },
    },
    methods: {
      onInput(e) {
        // 派发一个input事件，监听当前输入框最新的值（e.target.value）告诉父组件，用以判断值合法不合法
        this.$emit('input', e.target.value)

        /* step6-begin */
        // 准备做校验的时候除了规则还需要知道input输入框的值，也就是通过孩子拿到值
        // 孩子可以通过派发一个事件告诉爹 你要校验了
        // 这里用$parent进行派发的原因：如果是孩子input自己派发直接用this.$emit就行了，但是现在父组--
        //--件formItem里的<slot></slot>没法监听（写法的原因，只是一个<slot>），所以用input的爹--
        //--formInput派发事件。也就是在formItem里挂载以后即mounted里监听下面的validate事件，再校验--
        //--
        this.$parent.$emit('validate')
        /* step6-end */
      }
    }
  }
</script>

<style scoped>

</style>