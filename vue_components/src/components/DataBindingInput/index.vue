<template>
    <div>
        <input type="text" :value="" @input="onInput">
    </div>
</template>

<script>
  export default {
    name: "databindinginput",
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>