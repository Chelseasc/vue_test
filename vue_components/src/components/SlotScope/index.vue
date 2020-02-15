<template>
  <div id="app">
    <h2>作用域插槽 子组件调用</h2>
    <child v-bind:todos="todosBefore">
      <template slot-scope="slotProps">
        <!-- 打印itemvalue数据-->
        <div style="background:hotpink;">
          {{slotProps.itemValue}}
        </div>
        <!-- 根据判断条件展示对号元素 -->
        <span v-if="slotProps.itemValue.isComplete">✓</span>
        <!-- 显示代办事项名称 -->
        {{ slotProps.itemValue.test }}
      </template>
    </child>
  </div>
</template>

<script>
  import Child from '@/components/Child/index'
  export default {
    name: 'parent',
    components: {
      Child,
    },
    data () {
      return {
        todosBefore:[
          {
            test:'询问时间',
            isComplete:true,
            id:12312313123
          },
          {
            test:'代办1',
            isComplete:false,
            id:123123123423423
          },
          {
            test:'爱你地方年底见覅',
            isComplete:false,
            id:12312313123234234
          },
          {
            test:'时间2',
            isComplete:true,
            id:1231231312323333
          },
          {
            test:'师生情是行情',
            isComplete:true,
            id:12313333333
          }
        ],
      }
    },
  }
</script>