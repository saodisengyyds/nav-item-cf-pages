import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('./views/Home.vue');
const Admin = () => import('./views/Admin.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 