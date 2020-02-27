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
      const val = e.target.value;
      if(e.target.checked) {
        this.checkValue.push(val);
      } else {
        this.checkValue.splice(this.checkValue.indexOf(val), 1)
      }
      this.$emit('checkbox', this.checkValue);
    }
  }
}
</script>

<style scoped>
</style>
