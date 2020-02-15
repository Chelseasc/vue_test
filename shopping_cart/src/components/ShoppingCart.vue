<template>
  <div v-if="list.length">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button
              @click="handleReduce(index)"
              :disabled="item.count === 1">
              -
            </button>
            {{ item.count }}
            <button @click="handleAdd(index)">+</button>
          </td>
          <td>
            <button @click="handleRemove(index)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>总价： ￥ {{ totalPrice }}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  computed: {
    // totalPrice总价依赖于商品列表动态变化，这里可以用计算属性实现
    totalPrice: function () {
      let total = 0;
      const len = this.list.length;
      for(var i = 0; i < len; i++) {
        const item = this.list[i];
        total += item.price * item.count;
      }
      return total;
    }
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'macbook pro',
          price: 16188,
          count: 1
        },{
          id: 2,
          name: 'ipad pro',
          price: 9015,
          count: 1
        },{
          id: 3,
          name: 'apple pencil',
          price: 987,
          count: 1
        },
      ]
    }
  },
  methods: {
    handleReduce: function(index) {
      console.log(index);
      if(this.list[index].count > 1) {
        this.list[index].count--;
      }
      
    },
    handleAdd: function(index) {
      console.log(index);
        this.list[index].count++;

    },
    handleRemove: function(index) {
      console.log(index);
      this.list.splice(index, 1);
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
