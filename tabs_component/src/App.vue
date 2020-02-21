<template>
  <div id="app" v-cloak>
    <Tabs v-model="activeKey">
      <Pane label="标签一" name="1">标签一内容内容内容</Pane>
      <Pane label="标签二" name="2">标签二内容内容内容</Pane>
      <Pane label="标签三" name="3">标签三内容内容内容</Pane>
    </Tabs>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
import Pane from './components/Pane.vue'
export default {
  components: {
    Tabs,
    Pane
  },
  data() {
    return {
      activeKey: '1'
    }
  },
  methods: {
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
