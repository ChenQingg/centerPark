export default {
  name: "login",
  data() {
    return {
      // 登录表单
      login: {
        username: "chenqin",
        password: "123456"
      },
      // 表单校验
      rule: {
        username: [{ required: true, message: "账号必填", trigger: "blur" }],
        password: [{ required: true, message: "密码必填", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登录
    signIn() {
      //   this.$refs.login.validate(valid => {
      //     if (valid) {
      //       this.$api.admin.login(this.login).then(res => {
      //         // 储存用户信息
      //         localStorage.setItem("userInfo", JSON.stringify(res));
      //         // 清空标签
      //         window.sessionStorage.removeItem("tagList");
      //         // 提示
      this.$Message.success(" 欢迎回来！");
      //         // 跳转
      this.$router.replace({
        path: "/personal"
      });
      //       });
      //     }
      //   });
    }
  }
};
