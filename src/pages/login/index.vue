<template>
  <div class="login">
    <div class="left"></div>
    <div class="left-item"></div>
    <div class="right">
      <div class="container">
        <Form ref="login" :model="login" :rules="rule">
          <FormItem prop="username">
            <Input
              v-model="login.username"
              size="large"
              placeholder="输入账号"
            ></Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              v-model="login.password"
              size="large"
              type="password"
              placeholder="输入密码"
            ></Input>
          </FormItem>
          <FormItem>
            <Button
              size="large"
              type="primary"
              style="width: 100%"
              @click="signIn"
              >登录</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" scoped>
@import "index.less";
</style>
