import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Vuex from 'vuex';
Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置
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
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta: {
            title: '个人主页'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

// vuex配置
const store = new Vuex.Store({
    // vuex配置
    state: {
        count: 0,
        list: [1,2,3,4,5,10,30,50],
        actionCount: 0
    },
    mutations: {
        increment(state, n) {
            state.count += n;
        },
        decrease(state) {
            state.count--;
        },
        increType(state, params) {
            state.count += params.count;
        },
        actionIncrement(state, n = 1) {
            state.actionCount += n;
        }
    },
    getters: {
        filterList: state => {
            return state.list.filter(item => item < 10);
        },
        listFilterCount: (state, getters) => {
            return getters.filterList.length;
        }
    },
    actions: {
        asyncIncrement(context) {
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('actionIncrement');
                    resolve();
                }, 1000)
            });
        }
    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => {
        return h(App)
    }
});