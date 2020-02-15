<template>
    <DataBingdingInput></DataBingdingInput>
</template>

<script>
  import DataBingdingInput from '@/components/DataBingdingInput/index'
  export default {
    name: 'index',
    components: {
      DataBingdingInput
    },
    data () {
      return {
        model: {
          userName: 'sc', passWord: ''
        },
        rules: {
          userName: [{ required: true, message: '请输入用户名' }],
          passWord: [{ required: true, message: '请输入密码' }],
        }
      }
    }
  }
</script>

<style scoped>

</style>