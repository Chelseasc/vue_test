<template>
    <div>
        <ul>
            <item-myself :model='treeDatas'></item-myself>
        </ul>
    </div>
</template>

<script>
  import ItemMyself from './Item'
  export default {
    components: {
      ItemMyself
    },
    data () {
      return {
        treeDatas: {
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
    }
  }
</script>

<style scoped>

</style>