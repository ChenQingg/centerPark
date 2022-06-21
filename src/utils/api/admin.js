// **账号接口**

import base from "../base.js"; // 导入接口域名列表
import axios from "../http.js"; // 导入http中创建的axios实例

const admin = {
  // 上传图片
  // upload(params) {
  //   return axios.post(`${base.fm}${base.api}file/upload/img`, params);
  // },
  // 登录
  // login(params) {
  //   return axios.post(`${base.fm}${base.api}account/login`, params);
  // },
  // 账号列表
  // accountList(params) {
  //   return axios.get(`${base.fm}${base.api}account/page`, {
  //     params: params
  //   });
  // },
  // 添加账号
  // addAccount(params) {
  //   return axios.post(`${base.fm}${base.api}account/add`, params);
  // },
  // 编辑账号
  // editAccount(params) {
  //   return axios.post(`${base.fm}${base.api}account/edit/${params.id}`, params);
  // },
  // 删除账号
  // deleteAccount(params) {
  //   return axios.post(
  //     `${base.fm}${base.api}account/delete/${params.id}`,
  //     params
  //   );
  // }
  // 修改密码
  // resetPassword(params) {
  //   return axios.post(
  //     `${base.fm}${base.api}account/updatePassword/${params.id}`,
  //     params
  //   );
  // },
  // // 修改账号状态
  // changeAccount(params) {
  //   return axios.post(
  //     `${base.fm}${base.api}account/updateStatus/${params.id}`,
  //     params
  //   );
  // }
  // 权限列表
  // treeList(params) {
  //   return axios.get(`${base.fm}${base.api}role/authority/all`, {
  //     params: params
  //   });
  // },
  // // 角色列表
  // roleList(params) {
  //   return axios.get(`${base.fm}${base.api}role/page`, {
  //     params: params
  //   });
  // },
  // //角色详情
  // getRoleDetailReq(id) {
  //   return axios.get(`${base.fm}${base.api}role/detail/${id}`);
  // },
  // // 添加角色
  // addRole(params) {
  //   return axios.post(`${base.fm}${base.api}role/add`, params);
  // },
  // // 编辑角色
  // editRole(params) {
  //   return axios.post(`${base.fm}${base.api}role/edit/${params.id}`, params);
  // },
  // // 删除角色
  // deleteRole(params) {
  //   return axios.post(`${base.fm}${base.api}role/delete/${params.id}`);
  // },
  // // 切换角色状态
  // changeRole(params) {
  //   return axios.post(
  //     `${base.fm}${base.api}role/updateStatus/${params.id}`,
  //     params
  //   );
  // }
};

export default admin;
