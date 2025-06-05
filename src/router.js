import { createRouter, createWebHistory } from 'vue-router'

// 1. 先定义好每个路由对应的组件（懒加载写法更佳）
const home = () => import('@/views/Home.vue')
const coursePlanning = () => import('@/views/CoursePlanning.vue')

// 2. 定义路由表：path → component 映射
const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/course-planning',
        name: 'course-planning',
        component: coursePlanning,
    },
]

// 3. 创建并导出 router 实例
const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 history 模式（去掉 #）
    routes,
})

export default router
