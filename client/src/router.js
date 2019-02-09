import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aboutus',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/student',
      name: 'student Login',
      component: () => import('./views/studentLogin.vue'),
    },
    {
      path: '/student/forgot',
      name: 'forgot',
      component: () => import('./views/ForgetPassword.vue'),
    },
    {
      path: '/student/dashboard',
      name: 'dashboard',
      component: () => import('./views/Student.vue'),
      children: [],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
