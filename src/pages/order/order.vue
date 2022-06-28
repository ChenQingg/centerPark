<!-- 订单管理  -->
<template>
    <div class='order'>
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
                                <Button type="text" size="small" @click="detialForm(row)">详情</Button>       
                          </template>
                    </Table>
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
    </div>
    <!-- 对话框 -->
      <Modal
        v-model="modal1"
        :title="modalTitle"
        cancel-text
        @on-ok="ok"
         draggable
        :mask-closable="false"
       width="900px"
       >
        <template>
                        <Tabs value="name1">
                              <Tab-pane label="基本信息" name="name1">
                                    <div class="detalInfo">
                                      <div class="infoRow">
                                          <span class="text"> 订单号: </span>
                                          <span> 123 </span>
                                        </div>
                                        <div class="infoRow">
                                          <span class="text"> 藏品金额: </span>
                                          <span> ￥2323 </span>
                                        </div>
                                    </div>
                                    <div class="detalInfo">
                                      <div class="infoRow">
                                          <span class="text"> 作品名称 : </span>
                                          <span> 123 </span>
                                        </div>
                                        <div class="infoRow">
                                          <span class="text"> 作品图片 : </span>
                                          <span> 2323 </span>
                                        </div>
                                    </div>
                                    <div class="detalInfo">
                                      <div class="infoRow">
                                          <span class="text"> 持有者昵称 : </span>
                                          <span> 张校长 </span>
                                        </div>
                                        <div class="infoRow">
                                          <span class="text"> 购买者昵称 : </span>
                                          <span> 李三 </span>
                                        </div>
                                    </div>
                                  <div class="detalInfo">
                                      <div class="infoRow">
                                          <span class="text"> 下单时间 : </span>
                                          <span> 2022-12-12 12:23:20 </span>
                                        </div>
                                        <div class="infoRow">
                                          <span class="text"> 支付时间 : </span>
                                          <span> 2022-12-12 12:23:20 </span>
                                        </div>
                                  </div>
                                    <div class="detalInfo">
                                      <div class="infoRow">
                                          <span class="text"> 图片  </span><br>
                                          <span> <img src="@/assets/img/cover.png" alt="" style="width:180px"></span>
                                        </div>
                                  </div>
                      </Tab-pane>
                     
                      </Tabs>
                      </template>
    </Modal>
    </div>
</template>

<script src="./order.js"></script>
<style lang="less" scoped>
@import "order.less";
</style>