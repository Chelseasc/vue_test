<template>
  <div class="content">
    <div v-for="(item, index) in hobbyList" :key="index">
      <p>
        <label>
          <input name="sex" type="checkbox"
           :value="item.value"
           @click="handleCheck"
          />{{item.name}}
        </label>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hobbyList: {
      type: Array
    }
  },
  data() {
    return {
      checkValue: []
    }
  },
  methods: {
    handleCheck(e) {
      console.log('选中：', e.target);
      console.log('选中：', e.target.value);
      console.log('选中：', e.target.checked);
      
      this.$emit('checkbox', this.checkValue);
    }
  }
}
</script>

<style scoped>
</style>
