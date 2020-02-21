<template>
  <div class="tabs">
    <div class="tabs-bar">
      <div
        :class="tabClass(item)"
        v-for="(item, index) in navList"
        :key="index"
        @click="handleChange(index)">
        {{item.label}} 
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      currentValue: this.value,
      navList: []
    }
  },
  watch: {
    value: function (val) {
      this.currentValue = val;
    },
    currentValue: function () {
      this.updateStatus();
    }
  },
  methods: {
    tabClass: function (item) {
      return [
        'tabs-tab',
        {
          // 给选中的tab加一个class
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },
    handleChange(index) {
      var nav = this.navList[index];
      var name = nav.name;
      this.currentValue = name;
      this.$emit('input', name);
      this.$emit('on-click', name);
    },
    getTabs() {
      return this.$children.filter(function(item) {
        console.log('item:', item);
        console.log('item.$options:', item.$options);
        return item.$options.name === 'pane';
      })
    },
    updateNav() {
      this.navList = [];
      var _this = this;
      this.getTabs().forEach(function (pane, index) {
        _this.navList.push({
          label: pane.label,
          name: pane.name|| index
        });
        if(!pane.name) {
          pane.ame = index;
        }
        if(index === 0 && _this.currentValue) {
          _this.currentValue = pane.name || index;
        }
      });
      this.updateStatus();
    },
    updateStatus() {
      var tabs = this.getTabs();
      console.log('tabs', tabs);
      
      var _this = this;
      tabs.forEach(function (tab) {
        return tab.show = tab.name === _this.currentValue;
      })
    }
  }
}
</script>

<style scoped>
.tabs-bar::after {
  content: '';
  display: block;
  width: 100px;
  height: 1px;
  background: #d7dde4;
  margin-top: -1px;
}
.tabs-tab {
  display: inline-block;
  padding: 4px 16px;
  margin-right: 6px;
  background: #fff;
  border: 1px solid #d7dde4;
  cursor: pointer;
  position: relative;
}
.tabs-tab-active {
  color: #3399ff;
  border-top: 1px solid #3399ff;
}
.tabs-tab-active::before {
  content: '';
  display: block;
  height: 1px;
  background: #3399ff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.tabs-content {
  padding: 8px 0;
}
</style>
