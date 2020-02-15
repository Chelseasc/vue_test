<template>
    <li>
        <div @click="handleToggle">
            {{model.title}}
            <span v-if="isChild">[{{ open ? '-' : '+' }} ]</span>
        </div>
        <ul v-show="open" v-if="isChild">
            <item-myself v-for="model in model.children" :key="model.title" :model="model">
            </item-myself>
        </ul>
    </li>
</template>

<script>
  export default {
    name: 'ItemMyself',
    props: {
      model: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        open: false,
      }
    },
    computed: {
      isChild () {
        return this.model.children && this.model.children.length
      }
    },
    methods: {
      handleToggle () {
        if (this.isChild) {
            this.open = !this.open
        }
      }
    }
  }
</script>

<style scoped>

</style>