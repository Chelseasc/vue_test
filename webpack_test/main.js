import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta: {
            title: '介绍'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta: {
            title: '个人中心'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    { // 这段很重要，当访问路径不存在时重定向到首页
        path: '*',
        redirect: '/index'
    }
];
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
// beforeEach afterEach 路由即将改变前/后
// to 即将进入的目标的路由对象
// from 即将离开的路由对象
// next 调用此方法后才能进入下一个钩子
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
    // 校验是否登录
    // if(window.localStorage.getItem('token')) {
    //     next();
    // } else {
    //     next('/login');
    // }
})

router.afterEach((to, from, next) => {
    // 滚动条默认回到顶部
    window.scrollTo(0, 0);
})

new Vue({
    el: '#app',
    router: router,
    render: h => {
        return h(App)
    }
});