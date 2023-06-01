import { createRouter, createWebHistory } from 'vue-router';

// Lazy load component views
const routes = [
  { path: '', name: 'home', component: () => import('@/views/Home.vue') },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('@/views/Locations.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
