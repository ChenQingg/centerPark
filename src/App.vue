<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // 提示全局的配置
    this.$Message.config({
      duration: 3
    });
  },
};
</script>

<style>
/*公共样式*/
@import "./assets/css/public.css";
</style>
<style lang="less">
/*全局样式*/
@import "./assets/css/base.less";
</style>
