<template>
  <div id="app">
    <h1>数字输入框组件</h1>
    <h4>用来快捷输入一个标准的数字</h4>
    <p>子组件的数：{{total}}</p>
    <InputNumbers 
      @increase="handleTotal"
      @reduce="handleTotal"
      @input="handleTotal"
    />
  </div>
</template>

<script>
import InputNumbers from './components/InputNumbers.vue'
export default {
  components: {
    InputNumbers
  },
  data() {
    return {
      total: 0
    }
  },
  methods: {
    handleTotal(total) {
      this.total = total;
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
