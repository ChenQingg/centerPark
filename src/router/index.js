import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.ENV === "production" ? "/division" : "/",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login/index.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/pages/home/index.vue"),
      children: [
        // 首页================================================
        {
          path: "/personal",
          name: "personal",
          meta: { title: "个人用户" },
          component: () => import("@/pages/personal/index/index.vue")
        },
        {
          path: "/business",
          name: "business",
          meta: { title: "商业用户" },
          component: () => import("@/pages/business/index.vue")
        },
        {
          path: "/content",
          name: "content",
          meta: { title: "商业用户" },
          component: () => import("@/pages/user/content/index.vue")
        },
        {
          path: "/order",
          name: "order",
          meta: { title: "订单管理" },
          component: () => import("@/pages/order/order.vue")
        },
        {
          path: "/substance",
          name: "substance",
          meta: { title: "订单管理" },
          component: () => import("@/pages/substance/index.vue")
        }
      ]
    }
  ]
});
