import jsx from "babel-plugin-syntax-jsx";

const tableColumns = [
  {
    title: "作品Id",
    key: "number"
  },
  {
    title: "用户账号",
    width: 100,
    key: "weight"
  },

  {
    title: "作品图片",
    slot: "cover"
  },

  {
    title: "用户昵称",
    key: "createTime"
  },
  {
    title: "铸造时间",
    solt: "createTime"
  },
  {
    title: "发售时间",
    key: "createTime"
  },
  {
    title: "发售数量",
    key: "createTime"
  },
  {
    title: "价格",
    key: "createTime"
  },
  {
    title: "审核状态",
    key: "createTime"
  },
  {
    title: "销售状态",
    solt: "status"
  },
  {
    title: "操作",
    slot: "action",
    width: 150,
    align: "center",
    fixed: "right"
  }
];

export default {
  name: "Content",
  data() {
    return {
      // 表格加载状态
      loading: false,
      // 表格配置
      tableColumns: tableColumns,
      // 表单数据
      tableData: [],
      // 分页数据
      page: {
        num: 1,
        size: 10,
        total: 0
      },
      // 对话框
      modal: false,
      // 对话框标题
      modalTitle: "",
      // 表单
      form: {},
      // 表单校验
      rule: {
        bannerName: [{ required: true, message: "缺少名称", trigger: "blur" }],
        bannerImage: [
          { required: true, message: "缺少图片", trigger: "change" }
        ],
        bannerType: [
          {
            validator(rule, value, callback) {
              if (value === "") {
                callback("选择跳转类型");
              } else {
                callback();
              }
            },
            required: true,
            trigger: "change"
          }
        ],
        joinId: [
          {
            validator(rule, value, callback) {
              if (value === "") {
                callback("关联数据必选");
              } else {
                callback();
              }
            },
            required: true,
            trigger: "change"
          }
        ],
        content: [{ required: true, message: "输入内容", trigger: "change" }],
        title: [{ required: true, message: "输入内容" }],
        cover: [{ required: true, message: "上传图片", trigger: "change" }],
        weight: [{ required: true, message: "输入内容" }],
        sort: [{ type: "number", message: "排序必须是数字", trigger: "blur" }]
      },
      // 商品列表
      shopList: [],
      // 活动列表
      activityList: [],
      // 默认上传的列表
      //fileList: [],
      // 上传组件的列表
      uploadList: [],
      // 上传组件的地址
      action: "",
      // 上传组件的headers
      headers: {}
    };
  },
  mounted() {
    // 获取banner列表
    //this.getBannerList();
    // 上传组件的地址
    // this.action = this.root.fm + "admin/api/v1/admin/file/upload/img";
    // 上传组件的headers
    this.headers = {
      refresh:
        localStorage.getItem("refresh-token") === undefined ||
        localStorage.getItem("refresh-token") === "undefined"
          ? ""
          : localStorage.getItem("refresh-token"),
      token:
        localStorage.getItem("token") === undefined ||
        localStorage.getItem("token") === "undefined"
          ? ""
          : localStorage.getItem("token")
    };
    // 绑定上传组件
    //this.uploadList = this.$refs.upload.fileList;
  },
  methods: {
    // 获取banner列表
    // getBannerList() {
    //   this.loading = true;
    //   let params = {
    //     pageNum: this.page.num,
    //     pageSize: this.page.size,
    //     content: "",
    //     title: "",
    //     cover: ""
    //   };
    //   this.$api.platform
    //     .getBannerList(params)
    //     .then(res => {
    //       this.page.total = res.total;
    //       this.tableData = res.records;
    //       this.loading = false;
    //     })
    //     .catch(() => {
    //       this.loading = false;
    //     });
    // },
    // 页面发生变化
    pageChange(e) {
      this.page.num = e;
      this.getBannerList();
    },
    // 每页条数发生变化
    sizeChange(e) {
      this.page.size = e;
      this.getBannerList();
    }
    //   // 新增内容
    //   addForm() {
    //     this.modalTitle = "新增内容";
    //     // 打开弹窗
    //     this.modal = true;
    //     // 清空校验
    //     this.$refs.form.resetFields();
    //     // 清空内容
    //     this.form = {
    //       // bannerName: "",
    //       // bannerImage: "",
    //       cover: "",
    //       bannerType: "",
    //       joinId: "",
    //       content: "",
    //       sort: "",
    //       title: ""
    //     };
    //     if (this.uploadList.length > 0) {
    //       // 清空上传内容
    //       this.$refs.upload.fileList = [];
    //       this.uploadList = this.$refs.upload.fileList;
    //     }
    //   },
    //   // 修改账号
    //   editForm(item) {
    //     this.uploadList = this.$refs.upload.fileList;
    //     // console.log(item, "111111111111111111111111111");
    //     console.log(item, "item");
    //     this.modalTitle = "编辑内容";
    //     this.form = item;
    //     // 打开弹窗
    //     this.modal = true;
    //     this.form = JSON.parse(JSON.stringify(item));
    //     console.log(this.form);
    //     this.uploadList = this.$refs.upload.fileList = [item.cover].map(el => ({
    //       url: el,
    //       status: "finished"
    //     }));
    //     console.log(this.fileList);
    //   },
    //   fillContent(res) {
    //     // 填充内容
    //     this.form = {
    //       id: res.id,
    //       // title: res.title,
    //       // bannerName: res.bannerName,
    //       // bannerImage: res.bannerImage,
    //       // bannerType: res.bannerType,
    //       joinId: res.joinId,
    //       content: res.content,
    //       sort: res.sort,
    //       cover: res.cover
    //     };
    //     if (res.bannerImage) {
    //       // 清空上传内容
    //       this.$refs.upload.fileList = [
    //         {
    //           // name: res.bannerName,
    //           // url: res.bannerImage,
    //           status: "finished",
    //           joinId: res.joinId,
    //           content: res.content,
    //           sort: res.sort,
    //           cover: res.cover
    //         }
    //       ];
    //       this.uploadList = this.$refs.upload.fileList;
    //     }
    //     // 清空校验
    //     this.$refs.form.resetFields();
    //   },
    //   // 获取商品列表
    //   async getShopList() {
    //     let params = {
    //       pageNum: 1,
    //       pageSize: 9999999
    //     };
    //     this.$api.platform.getShopList(params).then(res => {
    //       this.shopList = res.records;
    //     });
    //   },
    //   // 获取活动列表
    //   async getActivityList() {
    //     let params = {
    //       pageNum: 1,
    //       pageSize: 9999999
    //     };
    //     this.$api.platform.getActivityList(params).then(res => {
    //       this.activityList = res.records;
    //     });
    //   },
    //   // 状态发生变化
    //   statusChange(e, item) {
    //     let params = {
    //       id: item.id,
    //       status: item.status
    //     };
    //     this.$api.platform
    //       .changeBanner(params)
    //       .then(() => {
    //         this.$Message.success(
    //           "内容状态" + (e === 1 ? "打开" : "关闭") + "成功!"
    //         );
    //       })
    //       .catch(() => {
    //         e = e === 1 ? 0 : 1;
    //       });
    //   },
    //   // 删除内容
    //   deleteForm(item) {
    //     this.$api.platform.deleteBanner({ id: item.id }).then(() => {
    //       this.$Message.success("删除成功!");
    //       // 更新banner列表
    //       this.getBannerList();
    //     });
    //   },
    //   // 上传图片之前
    //   beforeUpload() {
    //     // 只能上传一张
    //     // this.form = item;
    //     if (this.uploadList.length >= 1) {
    //       this.$Message.warning("只能上传一个banner图!");
    //       return false;
    //     }
    //   },
    //   // 上传图片失败
    //   imageError(file) {
    //     this.$Message.warning(
    //       "您选择的 “" + file.name + "” 文件格式不正确，请重新上传!"
    //     );
    //   },
    //   // 上传超出大小提示
    //   imageMaxSize(file) {
    //     this.$Message.warning(
    //       "您选择的图片 “" + file.name + "” 超过了2M，请重新上传!"
    //     );
    //   },
    //   // 上传图片成功
    //   imageSuccess(res, file) {
    //     console.log(file);
    //     if (res.code === 10000 || res.code === 0) {
    //       file.url = res.data.filePath;
    //       this.form.cover = res.data.filePath;
    //     } else {
    //       this.$Message.error(res.msg);
    //     }
    //   },
    //   // 打开图片
    //   openImage(file) {
    //     this.$openImg({
    //       url: file.url
    //     });
    //   },
    //   // 删除图片
    //   imageRemove(file) {
    //     const fileList = this.$refs.upload.fileList;
    //     this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    //     this.form.bannerImage = "";
    //   },
    //   // 富文本上传图片
    //   imageAdded(file, Editor, cursorLocation, resetUploader) {
    //     console.log(11111);
    //     let formData = new FormData();
    //     formData.append("file", file);
    //     console.log(formData.append);
    //     this.$api.admin.upload(formData).then(res => {
    //       Editor.insertEmbed(cursorLocation, "image", res.filePath);
    //       resetUploader();
    //     });
      },
    //   // 提交内容
      submitForm() {
        console.log(1111);
        // this.$refs.form.validate(valid => {
        //   if (valid) {
        //     if (this.modalTitle === "新增内容") {
        //       this.$api.platform.addBanner(this.form).then(() => {
        //         this.$Message.success("新增成功!");
        //         // 更新banner列表
        //         this.getBannerList();
        //         // 关闭弹窗
        //         this.modal = false;
        //       });
        //     } else if (this.modalTitle === "编辑内容") {
        //       this.$api.platform.editBanner(this.form).then(() => {
        //         this.$Message.success("编辑成功!");
        //         // 更新banner列表
        //         this.getBannerList();
        //         // 关闭弹窗
        //         this.modal = false;
        //       });
        //     }
        //   }
        // });
      }
  };
