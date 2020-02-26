<template>
  <div class="content">
    <div class="select" v-for="(item, index) in sexList" :key="index">
      <label>
        <input name="sex" type="radio"
         :value="item.value"
         v-model="checkValue"
         @click="handleCheck(item)"
        />
        {{item.name}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sexList: {
      type: Array
    }
  },
  data() {
    return {
      checkValue: ''
    }
  },
  methods: {
    handleCheck(item) {
      this.checkValue = item.value;
      this.$emit('radio', this.checkValue)
    }
  }
}
</script>

<style scoped>
.select {
  margin-bottom: 10px;
  width: 100%;
  background: #99ccff;

}
label {
  padding: 2px 10px;
}
</style>
