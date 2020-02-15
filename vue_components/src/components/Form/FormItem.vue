<!--formItem三个任务：-->
<!--step3 给input预留插槽-->
<!-- 能够展示label和校验信息-->
<!-- 能够进行校验-->
<template>
    <div>
        <!--step3-1-begin-->
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
        <!--step3-1-end-->
        <!--{{form.rules}}-->
        <!--验证inject的form有没有传进来-->
    </div>
</template>

<script>
  import Schema from 'async-validator'
  export default {
    name: "FormItem",
    /* step5-begin */
    inject: ['form'], // form组件用provide注册，子组件用需要inject。验证见上面代码。
    /* step5-end */

    props: {
      /* step3-2-begin */
      label: {
        type: String,
        default: ''
      },
      /* step3-2-end */

      /* step3-3-begin */
      // TODO 还应该告诉我将来要校验的字段项，即校验的是谁
      prop: {
        type: String,
      }
      /* step3-3-end */
    },
    data() {
      return {
        errorMessage: ''
      }
    },
    mounted() {
      /* step7-1-begin */
      this.$on('validate', this.validate)
      /* step7-1-end */
    },
    methods: {
      /* step7-2-begin */
      // 做校验。需要：1拿到校验规则 2拿到输入框的值（不推荐用参数传递的方式写,low）
      validate () {
        // console.log('this.prop:', this.prop);
        // debugger
        const value = this.form.model[this.prop] // 此form是inject注入进来的数据，this.prop等于是动态的获取,即username或password
        const rules = this.form.rules[this.prop]
        // console.log('value:', value);
        // console.log('rules:', rules);
        // 要校验可以安装一个库
        // npm i async-validator -S
        const descript = {
          [this.prop]: rules
        };
        const schema = new Schema(descript)
        // 这里return的是校验结果的Promise对象。这个校验结果 外面的form组件很关心，所以在form组件应该拿到所有的校验结果
        return schema.validate({[this.props]: value}, errors => {
          if(errors) {
            this.errorMessage = errors[0].message
          } else {
            this.errorMessage = ''
          }
        })
      }
      /* step7-2-end */
    }
  }
</script>

<style scoped>

</style>