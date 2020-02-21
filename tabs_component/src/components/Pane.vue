<template>
  <div class="pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: true
    }
  },
  watch: {
    label() {
      this.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    },
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
