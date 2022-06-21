<template>
  <div class="platform-content">
    <div class="tool">
      <!-- <Button icon="md-add" type="dashed" @click="addForm">新增</Button> -->
      <Button icon="md-add" type="dashed">新增</Button>
    </div>
    <!--    表格    -->
    <div class="table">
      <Table
        :columns="tableColumns"
        :data="tableData"
        :loading="loading"
        border
      >
        <!--        图片        -->
        <template slot-scope="{ row }" slot="cover">
          <img class="image" :src="row.cover" alt="" />
        </template>
 
        <!--        操作        -->
        <template slot-scope="{ row }" slot="action">
          <!-- <Button type="text" size="small" @click="editForm(row)">编辑</Button>
          <Poptip
            confirm
            transfer
            :title="'确定要删除 “' + row.title + '” 吗?'"
            @on-ok="deleteForm(row)"
          >
            <Button type="text" size="small">删除</Button>
          </Poptip> -->
          <Button type="text" size="small">编辑</Button>
          <Poptip
            confirm
            transfer
            :title="'确定要删除 “' + row.title + '” 吗?'"
          >
            <Button type="text" size="small">删除</Button>
          </Poptip>
        </template>
      </Table>
    </div>
    <!--    分页    -->
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
    <!--    对话框    -->
    <Modal
      v-model="modal"
      draggable
      :mask-closable="false"
      :title="modalTitle"
      width="900px"
    >
      <Form ref="form" :model="form" :rules="rule" :label-width="80">
        <FormItem label="名称  :" prop="title">
          <Row>
            <Col span="11">
              <Input
                v-model="form.title"
                placeholder="输入名称"
                maxlength="50"
                @change="changeVAlue(form.title)"
              ></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="图片" prop="cover">
          <!-- 上传图片的组件 -->
          <!-- <Upload
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
          </Upload> -->
          <!-- <div
            class="upload-list"
            v-for="item in uploadList"
            :key="item.url"
            v-show="uploadList.length > 0"
          >
             <template v-if="item.status === 'finished'"> -
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
               <Progress
                hide-info
              ></Progress>
            </template>
          </div> -->
        </FormItem>
        <FormItem label="权重" prop="weight">
          <Row>
            <Col span="11">
              <Input
                type="number"
                v-model="form.weight"
                :number="true"
                placeholder="输入权重"
                maxlength="10"
              ></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="内容" prop="content">
          <!-- 富文本 -->
          <vue-editor
            id="editor"
            useCustomImageHandler
            v-model="form.content"
            customCheckLinkFn
            :editor-toolbar="root.editor"
          ></vue-editor>

             <!-- <vue-editor
            id="editor"
            useCustomImageHandler
            @image-added="imageAdded"
            v-model="form.content"
            customCheckLinkFn
            :editor-toolbar="root.editor"
          ></vue-editor> -->
        </FormItem>
      </Form>
      <div slot="footer">
        <!-- <Button type="text" @click="modal = false">取消</Button>
        <Button type="primary" @click="submitForm">确定</Button> -->
          <Button type="text" >取消</Button>
        <Button type="primary" >确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" scoped>
@import "index.less";
</style>
