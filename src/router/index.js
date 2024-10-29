import MessageMenuPage from '@/MobileDevice/pages/ActionsMenuPage.vue'
import MessagesPage from '@/MobileDevice/pages/MessagesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: MessagesPage,
      name: 'home',
      path: '/',
    },
    {
      path: '/menu',
      name: 'menu',
      component: MessageMenuPage,
    },
  ],
})

export default router
