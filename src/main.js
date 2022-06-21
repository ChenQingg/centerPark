import Vue from "vue";
import App from "./App";
import router from "./router";

// 引入View UI框架
import ViewUI from "view-design";
Vue.use(ViewUI);
import "./assets/iview/index.css";

// 引入富文本编辑器
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

// 绑定全局变量
import common from "./utils/base.js";
Vue.prototype.root = common;

// 将api挂载到vue的原型上
import api from "./utils/api.js";
Vue.prototype.$api = api;

// 引入全局组件
import openImage from "./assets/js/use.js";
Vue.use(openImage);

//引入ELEMENT-UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入公共方法
// import tools from "@/utils/util.js";
// import { getDeptTree } from "@/utils/util.js";
// Vue.prototype.getDeptTree = getDeptTree;
// Vue.prototype.tools = tools;

// 引入导航栏加载条
import NProgress from "nprogress";
// 引入导航栏加载条资源
import "./assets/css/nprogress.css";

// 路由拦截
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }

//   const isLogin =
//     localStorage.getItem("division-token") === undefined ||
//     localStorage.getItem("division-token") === "undefined"
//       ? ""
//       : localStorage.getItem("division-token");

//   if (isLogin) {
//     next();
//   } else {
//     if (to.fullPath == "/login") {
//       next();
//     } else {
//       next({ path: "/login" });
//     }
//   }

//   NProgress.start();
//   next();
// });
router.afterEach(() => {
  NProgress.done();
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
