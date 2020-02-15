<template>
  <div class="tree">
    <ul>
      <item class='item' :model='treeData'></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'app',
  components: { Item },
  data () {
    return {
      treeData: {
        title: '1',
        children: [
          {
            title: '1-children1'
          },
          {
            title: '1-children2',
            children: [
              {
                title: '1-children2-children1'
              },
              {
                title: '1-children2-children2'
              }
            ]
          },
          {
            title: '1-children3',
            children: [
              {
                title: '1-children3-children1',
                expand: true,
                children: [
                  {
                    title: '1-children3-children1-children1'
                  },
                  {
                    title: '1-children3-children1-children2'
                  },
                  {
                    title: '1-children3-children1-children3'
                  }
                ]
              },
              {
                title: '1-children3-children2',
                children: [
                  {
                    title: '1-children3-children2-children1'
                  },
                  {
                    title: '1-children3-children2-children2'
                  }
                ]
              },
              {
                title: '1-children3-children3'
              }
            ]
          }
        ]
      }
    }
  },
}
</script>

<style scoped>
.tree {
  text-align: left;
}
</style>