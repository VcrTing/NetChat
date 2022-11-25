import { createRouter, createWebHistory } from 'vue-router'

//路由数组
import routes from './path/path'

//导出路由对象，在main.js中引用
export default createRouter({
    history: createWebHistory(),
    routes //上面的路由数组
})