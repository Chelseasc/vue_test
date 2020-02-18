<template>
  <div class="content">
    <input type="text" :value="count" @change="handleInput">
    <button @click="handleIncrease">+</button>
    <button @click="handleReduce">-</button>
    当前：{{count}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleIncrease() {
      this.count++;
      this.$emit('increase', this.count);
    },
    handleReduce() {
      this.count--;
      this.$emit('reduce', this.count);
    },
    handleInput(event) {
      const val = event.target.value;
      this.$emit('input', val);
      this.count = val;      
    }

  }
}
</script>

<style scoped>
.content {
  width: 400px;
  height: 50px;
  border: 1px solid #000;
  padding: 20px;
  margin: 0 auto;
}
</style>
