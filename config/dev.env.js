"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  // byr: '"http://run-shutter-admin.vaiwan.com"' //后端开发地址
  // byr:'"http://run-shutter-admin.isoft.mobi"'后台管理的测试地址
  // fm: '"http://192.168.3.30:10093/"'
  // fm: '"http://run-shutter.isoft.mobi"'
});
