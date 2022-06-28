<template>
  <div class="substance">
     <div class="tool">
            <Button type="primary" class="release" @click="release()">发布</Button>
      搜索<Input v-model="value" placeholder="请输入标题查询内容" class="serach" ></Input>
            <Col span="12">
                  <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </Col>
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
    <!-- 发布对话框 -->
       <Modal
      v-model="modal"
      draggable
      :mask-closable="false"
      :title="modalTitle"
      width="900px"
    >
      <Form ref="form" :model="form" :rules="rule" :label-width="80">
        <FormItem label="公告标题  :" prop="title">
          <Row>
            <Col span="11">
              <Input
                v-model="form.title"
                placeholder="输入标题"
                maxlength="50"
                @change="changeVAlue(form.title)"
              ></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="发布公告时间  :" prop="time" :label-width="120">
          <Row>
              <Col span="12">
            <Date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
          </Row>
        </FormItem>
        <FormItem label="图片" prop="cover">
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
        </FormItem>
        <FormItem label="内容" prop="content">
          <vue-editor
            id="editor"
            useCustomImageHandler
            @image-added="imageAdded"
            v-model="form.content"
            customCheckLinkFn
            :editor-toolbar="root.editor"
          ></vue-editor>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="modal = false" class="canel">取消</Button>
        <Button type="primary" @click="submitForm">确定</Button>
      </div>
    </Modal>
    <!-- 编辑内容对话框 -->
      <template>
         <Modal
        v-model="modal1"
        draggable
        cancel-text
        :mask-closable="false"
        :title="modalTitle1"
         width="900px"
       
         >
             <Form ref="form" :model="form" :rules="rule" :label-width="120">
        <FormItem label="公告标题  :" prop="title">
          <Row>
            <Col span="11">
              <Input
                v-model="form.title"
                placeholder="输入标题"
                maxlength="50"
                @change="changeVAlue(form.title)"
              ></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="发布公告时间 :" prop="time" :label-width="120">
          <Row>
              <Col span="12">
            <Date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
          </Row>
        </FormItem>
        <FormItem label="公告封面 :" prop="cover">
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
        </FormItem>
          <FormItem label="公告内容 :" prop="content">
          <vue-editor
            id="editor"
            useCustomImageHandler
            @image-added="imageAdded"
            v-model="form.content"
            customCheckLinkFn
            :editor-toolbar="root.editor"
          ></vue-editor>
        </FormItem>
          <FormItem label="修改备注  :" prop="titles">
          <Row>
            <Col span="11">
              <Input
                v-model="form.titles"
                placeholder="输入标题"
                maxlength="50"
                type="textarea" 
                :rows="4"
                @change="changeVAlue(form.title)"
              ></Input>
            </Col>
          </Row>
        </FormItem>
         <FormItem label="修改时间线  :" prop="title" :label-width="120">
              <Timeline>
        <Timeline-item>
            <p class="time">2022-12-12 12:12:00</p>
            <p class="content">修改发布时间</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2022-12-12 12:12:00</p>
            <p class="content">修改发布时间</p>
        </Timeline-item>
        <Timeline-item>
             <p class="time">2022-12-12 12:12:00</p>
            <p class="content">修改发布时间</p>
        </Timeline-item>
        
    </Timeline>
        </FormItem>
      </Form>
      <div slot="footer">
          <Button type="error" @click="dete()">删除</Button>
          <Button type="error" @click="off()" v-show="up" class="up">下架</Button>
           <!-- <Button type="error" @click="up = !up" >下架</Button> -->
            <Button type="primary" @click="On()" v-show="!up">上架</Button>
        <Button type="text" @click="modal1 = false" class="canel">重置</Button>
        <Button type="primary" @click="submitForm()">确定</Button>
      </div>
         </Modal>
      </template>
      <!-- 删除对话框 -->
      <Modal
        v-model="dele"
      
        width="400px"
   >
        <p class="title">警告</p>
        <p claSS="tip">确认删除当前公告吗？删除后不可找回</p>
       <div slot="footer" class="footer">
        <Button type="text" @click="dele = false" class="canel">取消</Button>
        <Button type="primary" @click="sure()">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" scoped>
@import "index.less";
</style>
