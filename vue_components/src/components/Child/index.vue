<template>
  <ul>
    <li v-for="item in childList" v-bind:key="item.id">
      <slot v-bind:itemValue="item" >
        {{ item.test }}
      </slot>
    </li>
  </ul>
</template>
<script>
  export default{
    name: 'child',
    props: {
      todos: Array
    },
    data () {
      return {
        childList:this.todos
      }
    }
  }
</script>