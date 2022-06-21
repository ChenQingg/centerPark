<template>
  <div class="home">
    <div class="home-left">
      <!-- 侧边logo -->
      <div class="home-logo"></div>
      <!-- 侧边栏 -->
      <div class="home-menu-box">
        <Menu
          class="home-menu"
          ref="menu"
          :active-name="menuActive"
          :open-names="menuOpen"
          :accordion="true"
          width="180px"
        >
          <div v-for="(item, index) in menuList" :key="index">
            <Submenu :name="index" v-if="item.children">
              <template slot="title">
                <Icon :type="item.icon" />
                <span>{{ item.name }}</span>
              </template>
              <MenuItem
                :name="key.name"
                :to="key.href"
                v-for="(key, e) in item.children"
                :key="e"
                >{{ key.name }}</MenuItem
              >
            </Submenu>
            <MenuItem v-else :name="item.name" :to="item.href">
              <template>
                <Icon :type="item.icon" />
                <span>{{ item.name }}</span>
              </template>
            </MenuItem>
          </div>
        </Menu>
      </div>
    </div>
    <div class="home-right">
      <!-- 顶部导航 -->
      <div class="home-top flex space-between">
        <!-- 左侧面包屑导航 -->
        <!-- <div class="home-crumb">
          <Breadcrumb>
            <BreadcrumbItem to="/index">
              <Icon type="ios-home-outline"></Icon>
              <span>首页</span>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span>{{ parentName }}</span>
            </BreadcrumbItem>
            <BreadcrumbItem :to="activeHref">
              <span>{{ activeName }}</span>
            </BreadcrumbItem>
          </Breadcrumb>
        </div> -->
        <!-- 右侧工具栏 -->
        <div class="home-tool">
          <div class="info">
              <p>chenqin</p>
          <p>123456</p>
          </div>
        
          <Poptip placement="bottom-end" :transfer="true" padding="0">
            <div slot="content">
              <div style="padding: 18px 16px" class="flex">
                <Avatar icon="ios-person" size="large" />
                 <!-- <Avatar icon="ios-person" size="large" :src="userInfo.avatar" /> -->
                <div
                  style="width: calc(100% - 40px);padding-left: 12px;box-sizing: border-box"
                >
                  <div
                    style="line-height: 24px;font-size: 14px;color: inherit;"
                  >
                    <!-- {{ userInfo.nickName }} -->
                  </div>
                  <div style="line-height: 1.2;font-size: 12px;color: #808695">
                    <!-- {{ userInfo.roleName }} -->
                  </div>
                </div>
              </div>
              <Card
                icon="ios-options"
                :padding="0"
                shadow
                style="width: 200px;"
              >
                <CellGroup @on-click="logout">
                  <Cell title="修改密码" name="password" />
                  <Cell title="退出登录" name="logout" />
                </CellGroup>
              </Card>
            </div>
            <div>
              <!-- <Avatar icon="ios-person" size="large" :src="userInfo.avatar" /> -->
                <Avatar icon="ios-person" size="large"  />
              <Icon
                type="md-arrow-dropdown"
                style="font-size: 20px;color: #515a6e"
              />
            </div>
          </Poptip>
        </div>
      </div>
      <!-- 内容 -->
      <div class="home-content">
        <!--页面返回不刷新-->
        <Card>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </Card>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" scoped>
@import "index.less";
</style>
