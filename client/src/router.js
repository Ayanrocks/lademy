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
      name: 'student',
      component: () => import('./views/Student.vue'),
      children: [
        {
          path: '/dashboard',
          component: () => import('./views/StudentMain/Dashboard.vue'),
        },
        {
          path: '/student/courses',
          component: () => import('./views/StudentMain/Courses.vue'),
        },
        {
          path: '/student/explore',
          component: () => import('./views/StudentMain/Explore.vue'),
        },
        {
          path: '/student/profile',
          component: () => import('./views/StudentMain/Profile.vue'),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
