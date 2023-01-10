import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './components/pages/LoginPage.vue';
import RegisterPage from './components/pages/RegisterPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/register',
      component: RegisterPage,
    },
  ],
  linkActiveClass: 'active__route',
});

export default router;
