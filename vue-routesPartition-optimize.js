// 分区路由文件写法

export default {
    path: '/index',
    name: 'index',
    // 懒加载式引入，当跳转到时才进行引入chunk
    component: () => import('../views/Index.vue'),
    children: [...]
}

// 总路由管理文件 index.js写法

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 路由数组 - 存放所有路由
const routerList = [];
function importAll(routerArr) {
    // 该函数用于将所有分区路由中到路由添加到路由数组
    routerArr.keys().forEach(key => {
        console.log(key);
        routerList.push(routerArr(key).default);
    })
}
importAll(require.context('.', true, /\.routes\.js/));

const routes = [...routerList];
const router = new VueRouter({
    routes
});

export default router