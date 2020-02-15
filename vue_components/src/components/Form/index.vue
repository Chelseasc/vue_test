<template>
    <div>
        <h3>表单</h3>
        <hr>
         <!--:model相当于v-bind:model的缩写,只是将父组件的数据传递到了子组件，并没有实现子组件和父组件数据的双向绑定。-->
        <sc-form :model="model" :rules="rules" ref="form">
            <sc-form-item lable="用户名" prop="username">
                <!--这里v-model的使用必须有两个前提：在子组件input里绑定一个value，实现一个input事件，具体见input组件-->
                <!--这里v-model是:value="model.username" @input="model.username=$event"的语法糖，也就是：-->
                <!--<sc-input type="text" :value="model.username" @input="model.username=$event"></sc-input>-->
                <!--PS：这里所有的属性会自动挂载在子组件input输入框上面-->
                <sc-input type="text" v-model="model.username" autocomplete="off" placeholder="输入用户名"></sc-input>
            </sc-form-item>
            <sc-form-item lable="确认密码" prop="password">
                <sc-input type="password" v-model="model.password" autocomplete="off"></sc-input>
            </sc-form-item>
            <sc-form-item>
                <button @click="submitForm('login')">提交</button>
            </sc-form-item>
        </sc-form>
        看model是否变了:
        {{model}}
    </div>
</template>

<script>
  import ScForm from '@/components/Form/Form'
  import ScFormItem from '@/components/Form/FormItem'
  import ScInput from '@/components/Form/Input'
  export default {
    name: "index",
    components: {
      ScForm,
      ScFormItem,
      ScInput
    },
    data() {
      return {
        model: {
          username: 'sc', password: ''
        },
        rules: {
          username: [{required: true, message: '请输入用户名'}],
          password: [{required: true, message: '请输入密码'}],
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs.form.validate(valid => { // 讲解见Form.vue第52行
          if(valid) {
            alert('校验成功，请登录')
          } else {
            alert('校验失败')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>