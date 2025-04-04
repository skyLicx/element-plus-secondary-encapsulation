import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  
  {
    path: '/',
    component: () => import('../components/container/src/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/chooseIcon/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


