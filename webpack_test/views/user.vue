<template>
    <div>
        <h1>用户</h1>
        <p>{{$route.params.id}}</p>
        <button @click="handelPush">click-push</button>
        <button @click="handleReplace">click-replace</button>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log('route:',this.$route);
        console.log('id:',this.$route.params.id);
    },
    methods: {
        handelPush() {
            this.$router.push('/about');
        },
        handleReplace() {
            // replace  不向history添加新记录，而是替换当前history记录，所以无法回退
            this.$router.replace('/about');
        }
    }
}
</script>