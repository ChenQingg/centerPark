// 内容管理

import base from "../base.js"; // 导入接口域名列表
import axios from "../http.js";

const platform = {
  // getStatistics(params) {
  //   return axios.get(`${base.url}${base.api}account/detail`, { params });
  // },
  // // 获取地区
  // getAreaList(params) {
  //   return axios.get(`${base.url}division/api/v1/supplier/base/area/tree`, {
  //     params: params
  //   });
  // },
  // // 获取组织架构列表
  // getStructureList(params) {
  //   return axios.get(`${base.url}${base.api}dept/tree`, {
  //     params: params
  //   });
  // },
  // // 新增部门
  // addStructure(params) {
  //   return axios.post(`${base.url}${base.api}dept/add`, params);
  // },
  // // 编辑部门
  // editStructure(params) {
  //   return axios.post(`${base.url}${base.api}dept/edit/${params.id}`, params);
  // },
  // // 删除部门
  // deleteStructure(params) {
  //   return axios.post(`${base.url}${base.api}dept/delete/${params.id}`, params);
  // },
  // // 获取业务员
  // getUserList(params) {
  //   return axios.get(`${base.url}${base.api}salesman/page`, {
  //     params: params
  //   })
  // },
  // // 新增业务员
  // addSalesman(params) {
  //   return axios.post(`${base.url}${base.api}salesman/add`, params);
  // },
  // // 编辑业务员
  // editSalesman(params) {
  //   return axios.post(`${base.url}${base.api}salesman/edit/${params.id}`, params);
  // },
  // // 删除业务员
  // deleteSalesman(params) {
  //   return axios.post(`${base.url}${base.api}salesman/delete/${params.id}`, params);
  // },
  // // 获取业务员列表
  // getSalesmanList(params) {
  //   return axios.get(`${base.url}${base.api}salesman/list`, {
  //     params: params
  //   })
  // },
  // // 获取事业部业绩
  // getSelfAchievement(params) {
  //   return axios.get(`${base.url}${base.api}account/achievement/page`, {
  //     params: params
  //   })
  // },
  // // 获取业务员业绩
  // getSalesmanAchievement(params) {
  //   return axios.get(`${base.url}${base.api}salesman/achievement/page`, {
  //     params: params
  //   })
  // },
  // // 获取代理商业绩
  // getAgentAchievement(params) {
  //   return axios.get(`${base.url}${base.api}supplier/achievement/page`, {
  //     params: params
  //   })
  // },
  // // 新增代理商
  // addAgent(params) {
  //   return axios.post(`${base.url}${base.api}supplier/add`, params);
  // },
  // // 编辑代理商
  // editAgent(params) {
  //   return axios.post(`${base.url}${base.api}supplier/edit/${params.id}`, params);
  // },
  // // 删除代理商
  // deleteAgent(params) {
  //   return axios.post(`${base.url}${base.api}supplier/delete/${params.id}`, params);
  // },
  // // 修改状态
  // editAgentStatus(params) {
  //   return axios.post(`${base.url}${base.api}supplier/update-status/${params.id}`, params);
  // },
  // // 获取代理商列表
  // getAgentList(params) {
  //   return axios.get(`${base.url}${base.api}supplier/list`, {
  //     params: params
  //   })
  // },
  // getAgentPage(params) {
  //   return axios.get(`${base.url}${base.api}supplier/page`, { params })
  // },
  // // copy客户
  // transformCustomer(params) {
  //   return axios.post(`${base.url}${base.api}supplier/copy-user/${params.fromId}/${params.toId}`);
  // },
};

export default platform;
