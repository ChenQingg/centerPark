<!-- 用户管理——商业用户  -->
<template>
    <div class='business'>
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
                                <Button type="text" size="small" @click="editForm(row)" class="edtial">编辑</Button>       
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
             <!-- 编辑对话框 -->
           <template>
                    <Modal
                    v-model="modal"
                    draggable
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
                                          <span class="text"> 发售数量 : </span>
                                          <span> 2323 </span>
                                        </div>
                                    </div>
                                    <div class="detalInfo">
                                      <div class="infoRow">
                                          <span class="text"> 铸造时间 : </span>
                                          <span> 2022-12-12 12:20:20 </span>
                                        </div>
                                        <div class="infoRow">
                                          <span class="text"> 发售时间 : </span>
                                           <Date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker>
                                        </div>
                                    </div>
                                  <div class="detalInfo">
                                      <div class="infoRow">
                                          <span class="text"> 发售状态 : </span>
                                          <span> 发售中 </span>
                                        </div>
                                  </div>
                      </Tab-pane>
                      <Tab-pane label="创作信息" name="name2" >
                         <p>创作过程</p>
                          <Upload
                            v-show="uploadList.length === 0"
                            ref="upload"
                            :show-upload-list="false"
                            :default-file-list="fileList"
                            :on-success="imageSuccess"
                            :format="['jpg', 'jpeg', 'png']"
                            :max-size="2048"
                            :on-format-error="imageError"
                            :on-exceeded-size="imageMaxSize"
                            :before-upload="beforeUpload"
                            name="file"
                            type="drag"
                            :action="action"
                            :headers="headers"
                          >
                            <div class="upload">
                              <Icon type="ios-camera" size="30"></Icon>
                            </div>
                          </Upload>
                          <div
                            class="upload-list"
                            v-for="item in uploadList"
                            :key="item.url"
                            v-show="uploadList.length > 0"
                          >
                            <template v-if="item.status === 'finished'">
                              <img class="upload-image" :src="item.url" />
                              <div class="upload-list-cover">
                                <Icon type="ios-eye-outline" @click="openImage(item)"></Icon>
                                <Icon
                                  type="ios-trash-outline"
                                  @click.native="imageRemove(item)"
                                ></Icon>
                              </div>
                            </template>
                            <template v-else>
                              <Progress
                                v-if="item.showProgress"
                                :percent="item.percentage"
                                hide-info
                              ></Progress>
                            </template>
                           </div>
                          <p>审核操作</p>
                                 <div class="btn">
                                       <Radio-group v-model="disabledGroup">
                                          <Radio label="通过"></Radio>
                                          <Radio label="驳回"></Radio>                                     
                                      </Radio-group>
                                 </div>
                          <p>驳回备注</p>
                                  <template>
                                         <Input v-model="value6" type="textarea" :rows="5" placeholder="请输入文本内容" class="editIpnut"></Input>
                                  </template>
                              
                      </Tab-pane>
                      </Tabs>
                      </template>
                      </Modal>
          </template>
    </div>
</template>

<script src="./index.js"></script>
<style lang="less" scoped>
@import "index.less";
</style>