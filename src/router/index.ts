import { createRouter, createWebHistory } from 'vue-router'
import RecipesView from '@/views/RecipesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: RecipesView,
    },
    {
      path: '/create',
      name: 'create',
      component: () =>import('../views/CreateView.vue'),
    }
  ],
})

export default router
