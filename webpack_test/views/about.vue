<template>
    <div>
        <h1>介绍页</h1>
        <button @click="handleLink">跳转到个人中心页</button>
    </div>
</template>
<script>
export default {
    methods: {
        handleLink() {
            this.$router.push('/user/123567890');
        }
    }
}
</script>