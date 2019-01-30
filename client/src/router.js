import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import studentLogin from "./views/studentLogin.vue";
import ForgetPassword from "./views/ForgetPassword.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/aboutus",
      name: "about",
      component: About
    },
    {
      path: "/student",
      name: "student Login",
      component: studentLogin
    },
    {
      path: "/student/forgot",
      name: "forgot",
      component: ForgetPassword
    },
    {
      path: "/student/dashboard",
      name: "dashboard",
      component: Dashboard
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
