<template>
  <div class="content">
     <div class="tool">
      搜索： <Input v-model="value" placeholder="请输入标题查询内容" style="width: 300px" ></Input>
                <Select v-model="model1" style="width:200px" >
                        <Option v-for="item in cityList" :value="item.value" :key="item.id">{{ item.label }}</Option>
                </Select>
                 <Button class="status">重置</Button>
                 <Button type="primary">搜索</Button>
    </div>
      <!--    表格    -->
    <div class="table">
         <Table
              border
              :columns="tableColumns"
              :data="tableData"
              :loading="loading" 
      >
      <!--        审核状态        -->

      <!--        操作        -->
            <template slot-scope="{ row }" slot="action">
                  <Button type="text" size="small" @click="details(row)">详情</Button>
                   <Button type="text" size="small" @click="editForm(row)">编辑</Button>       
           </template>
           </Table>
    </div>
    <!-- 分页 -->
     <div class="page text-right">
      <Page
        :total="page.total"
        :current="page.num"
        :page-size="page.size"
        @on-change="pageChange"
        @on-page-size-change="sizeChange"
        show-elevator
        show-sizer
        show-total
      />
    </div>
    <!-- 详情对话框 -->
    <template>
         <Modal
        v-model="modal"
        draggable
        cancel-text
        :mask-closable="false"
        :title="modalTitle"
        width="1075px"
         >
          <template>
             <Tabs value="name1">
                  <Tab-pane label="基本信息" name="name1">
            <div class="detalInfo">
               <div class="infoRow">
                  <span class="text"> 用户编号: </span>
                   <span> 123 </span>
                </div>
                <div class="infoRow">
                  <span class="text"> 用户名称: </span>
                   <span> 2323 </span>
                </div>
            </div>
            <div class="detalInfo">
               <div class="infoRow">
                  <span class="text"> 用户编号 : </span>
                   <span> 123 </span>
                </div>
                <div class="infoRow">
                  <span class="text"> 用户名称 : </span>
                   <span> 2323 </span>
                </div>
            </div>
            <div class="detalInfo">
               <div class="infoRow">
                  <span class="text"> 用户账号 : </span>
                   <span> 123 </span>
                </div>
                <div class="infoRow">
                  <span class="text"> 审核状态 : </span>
                   <span> 2323 </span>
                </div>
            </div>
          <div class="detalInfo">
               <div class="infoRow">
                  <span class="text"> 注册时间 : </span>
                   <span> 123 </span>
                </div>
                <div class="infoRow">
                  <span class="text"> 认证时间 : </span>
                   <span> 2323 </span>
                </div>
          </div>
          <div class="detalInfo">
               <div class="infoRow">
                  <span class="text"> 真实姓名 : </span>
                   <span> 123 </span>
                </div>
                <div class="infoRow">
                  <span class="text"> 身份证号码名 : </span>
                   <span > 232323232232332 </span>
                </div>
          </div>
           <div class="detalImg">
               <div class="detalCard">
                   <p class="imgText">身份证正反面照片</p>
                   <div class="carImg">
                     <img src="@/assets/img/card.png" alt="" >
                     <img src="@/assets/img/sideCard.png" alt="" >
                  </div>
                </div>
                <div class="business">
                  <p>营业执照照片</p>
                  <div class="busImg">
                     <img src="@/assets/img/sideCard.png" alt="">
                  </div>
               </div>
          </div>
         
       </Tab-pane>
                  <Tab-pane label="作品信息" name="name2">
            <template>
                <Table border size="large" :columns="columns1" :data="data1"></Table>
            </template>
             <!-- 分页 -->
     <div class="page text-right">
      <Page
        :total="page.total"
        :current="page.num"
        :page-size="page.size"
        @on-change="pageChange"
        @on-page-size-change="sizeChange"
        show-elevator
        show-sizer
        show-total
      />
    </div>
                  </Tab-pane>
      
            </Tabs>
          </template> 
       </Modal>
    </template>
    <!-- 编辑内容对话框 -->
      <template>
         <Modal
        v-model="modal1"
        draggable
        cancel-text
        :mask-closable="false"
        :title="modalTitle1"
         width="575px"
         height="300px"
         >
               <p>操作审核</p>
                 <!-- <Button type="primary">冻结账户</Button>
                 <Button type="error">注销账户</Button> -->
                   <div class="btn">
                             <Radio-group v-model="disabledGroup">
                                     <Radio label="冻结账户"></Radio>
                                     <Radio label="注销账户"></Radio>                                     
                              </Radio-group>
                    </div>
               <p>操作备注</p>
                  <template>
                         <Input v-model="value6" type="textarea" :rows="4" placeholder="请输入文本内容" class="editIpnut"></Input>
                  </template>
         </Modal>
      </template>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" scoped>
@import "index.less";
</style>
