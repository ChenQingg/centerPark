// **axios封装**
import axios from "axios";
import router from "../router";
import { Message } from "view-design";

// 跨域访问需要发送cookie
// axios.defaults.withCredentials = true

// 创建axios实例
let instance = axios.create({
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 60 * 1000
});

// 请求拦截器
// 每次请求前，如果存在token则在请求头中携带token
instance.interceptors.request.use(
  config => {
    // console.log(config)
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    // config.data = JSON.stringify(config.data); //数据转化,也可以使用qs转换
    config.header = {
      Authorization: "",
      "Content-Type": "application/json; charset=UTF-8", //配置请求头
      Connection: "keep-alive"
      // changeOrigin: true,
    };
    //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    let refreshToken =
      localStorage.getItem("division-refresh-token") === undefined ||
      localStorage.getItem("division-refresh-token") === "undefined"
        ? ""
        : localStorage.getItem("division-refresh-token");
    let token =
      localStorage.getItem("division-token") === undefined ||
      localStorage.getItem("division-token") === "undefined"
        ? ""
        : localStorage.getItem("division-token");
    if (refreshToken && token) {
      config.headers["division-refresh-token"] = refreshToken;
      config.headers["division-token"] = token;
    }
    return config;
  },
  error => Promise.error(error)
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    if (res.status === 200 || res.status === 201) {
      // 更新本地校验信息
      if (res.headers["division-refresh-token"] && res.headers["division-token"]) {
        localStorage.setItem("division-refresh-token", res.headers["division-refresh-token"]);
        localStorage.setItem("division-token", res.headers["division-token"]);
      }
      if (res.data.code === 10000 || res.data.code === 0) {
        // 请求成功
        return Promise.resolve(res.data.data);
      } else if (res.data.code === 10998) {
        Message.error("登录信息失效，请重新登录");
        // 退回登录页面
        router.replace({ path: "/login" });
        // 登录信息失效
        return Promise.reject(res.data);
      } else {
        // 其它失效情况
        Message.error(res.data.msg);
        return Promise.reject(res.data);
      }
    } else {
      return Promise.reject(res.data);
    }
  },
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      Message.error("错误信息" + response.status);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        // store.commit('changeNetwork', false);
        Message.error("网络连接异常");
      } else {
        Message.error("服务器异常");
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
