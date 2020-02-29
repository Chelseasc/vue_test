<template>
    <div>
        <h1>首页</h1>
        <router-link to="/about">跳转到 about</router-link>
        <div class="vuex">
            <h2>mutations</h2>
            <p>count: {{count}}</p>
            <button @click="handleIncrement">+n</button>
            <button @click="handleDecrease">-1</button>
            <button @click="handleType">+10</button>
        </div>
        <div class="vuex">
            <h2>getters</h2>
            <div>原数据：{{list}}</div>
            <div>小于10的数据：{{fillist}}</div>
            <div>小于10的数据的长度：{{listFilterCount}}</div>
        </div>
        <div class="vuex">
            <h2>actions</h2>
            <div>异步数据：{{actionCount}}</div>
            <button @click="handleAsyncIncrement">点击后过一秒+1</button>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            count() {
                return this.$store.state.count;
            },
            list() {
                return this.$store.state.list;
            },
            fillist() {
                return this.$store.getters.filterList;
            },
            listFilterCount() {
                return this.$store.getters.listFilterCount;
            },
            actionCount() {
                return this.$store.state.actionCount;
            }
        },
        methods: {
            handleIncrement() {
                this.$store.commit('increment', 5);
            },
            handleDecrease() {
                this.$store.commit('decrease');
            },
            handleType() {
                this.$store.commit({
                    type: 'increType',
                    count: 10
                })
            },
            handleAsyncIncrement() {
                this.$store.dispatch('asyncIncrement').then(() => {
                    console.log(this.$store.state.actionCount);
                });
            }
        }
    }
</script>
<style scoped>
.vuex {
    width: 400px;
    padding: 20px;
    margin: 20px;
    border: 1px solid #eee;
}
</style>