<template>
    <li>
        <div @click="toggle">
            {{model.title}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <item class="item" v-for="model in model.children" :model="model" :key="model.title">
            </item>
        </ul>
    </li>
</template>

<script>
  export default {
    name: 'Item', // 递归组件必须要有name，且是大写
    props: {
      model: {
        type: Object, required: true
      }
    },
    data () {
      return {
        open: false
      }
    },
    computed: {
      isFolder () { // 表明有没有子项（能不能展开）
        return this.model.children && this.model.children.length
      }
    },
    methods: {
      toggle () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }
  }
</script>

<style scoped>

</style>