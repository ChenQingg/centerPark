const tableColumns = [
    {
      title: "发布时间",
      key: "time",
      align: "center",
      
    },
    {
      title: "公告标题",
      width: 300,
      key: "title",
      align: "center",
    },
    {
      title: "公告图片",
      key: "cover",
      align: "center",
    },
    {
      title: "发布者昵称",
      key: "name",
      align: "center",
      
    },
    {
      title: "公告状态",
      key: "status",
      align: "center",
    },
    {
      title: "最近修改时间",
      key: "LastTime",
      align: "center",
    },
   
    {
      title: "操作",
      slot: "action",
      width: 150,
      align: "center",
      fixed: "right"
    }
  ];
  const columns1= [
          {
            title: '序号',
            width:80,
            key: 'number',
            align: "center"
        },
        {
          title: '作品编号',
          width:120,
          key: 'WorkNo',
          align: "center"
        },
        {
          title: '发售数量',
          width:120,
          key: 'sales',
          align: "center"
        },
        {
          title: '作品图片',
          width:180,
          key: 'cover',
          align: "center"
        },
        {
          title: '作品名称',
          width:120,
          key: 'name',
          align: "center"
        },
        {
        title: '作品价格',
        width:120,
        key: 'age',
        align: "center"
        },
        {
        title: '购买日期',
        width:180,
        key: 'date',
        align: "center"
        },
        {
        title: '上架状态',
        width:120,
        key: 'LikeStatus',
        align: "center"
        }
    ];
  
  export default {
    name: "Personal",
    data() {
      return {
        cityList:[
          {
            value: 'all',
            label: '全部'
        },
        {
            value: 'Not approved',
            label: '未审核'
        },
        {
            value: 'Yes approved',
            label: '已审核'
        }
      ],
        //选择器
        model1:"",
         // 默认上传的列表
      fileList: [],
         // 上传组件的列表
      uploadList: [],
      // 上传组件的地址
      action: "",
      // 上传组件的headers
      headers: {},
        //编辑对话框
        modal1:false,
        // 发布公告对话框
        modal:false,
        // 发布公告对话框标题
        modalTitle:"",
        //编辑对话框标题
        modalTitle1: "",
        
        // 表单
        from:{},
        // 删除对话框
        dele:false,
        // 编辑输入框内容
        // value6: '',
         // 表单
         form: {},
        //  表单效验
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
         //搜索框
         value: '',
          // 表格加载状态
          loading: false,
          // 表格配置
          tableColumns: tableColumns,
          // 格配置
          columns1:columns1,
          // 表单数据
          tableData: [
            {
              time:"2022-12-12 12:23:20",
              title:"就是一个公告标题标题叫姐姐",
              cover:"cover",
              name:"张三",
              status:"未审核",
              LastTime:"2022-12-12 12:23:20",
             
            }
          ],
          // 作品信息表单数据
          data1: [
            {
                number: 1,
                WorkNo:2323,
                sales: 18,
                cover:"cover",
                age:77,
                name: '芍药居',
                date:"2022-6-24 12：12:00",
                LikeStatus:'已上架'
            },
            
        ],
        // 发布公告的时间控件
        options3: {
          disabledDate (date) {
              return date && date.valueOf() < Date.now() - 86400000;
          }
        },
          // 分页数据
          page: {
            num: 1,
            size: 10,
            total: 0
          },
      };
    },
    mounted() {
    },
    methods: {
        editForm() {
          this.modalTitle1 = "公告详情编辑";
          // 打开弹窗
          this.modal1 = true;
        },
      pageChange(){
      },
      sizeChange(){
      },
      // 点击发布
      release(){
        this.modalTitle = "发布公告";
        // 打开弹窗
        this.modal = true;
      },
        // 上传图片之前
    beforeUpload() {
      // 只能上传一张
      // this.form = item;
      if (this.uploadList.length >= 1) {
        this.$Message.warning("只能上传一个banner图!");
        return false;
      }
    },
    // 上传图片失败
    imageError(file) {
      this.$Message.warning(
        "您选择的 “" + file.name + "” 文件格式不正确，请重新上传!"
      );
    },
    // 上传超出大小提示
    imageMaxSize(file) {
      this.$Message.warning(
        "您选择的图片 “" + file.name + "” 超过了2M，请重新上传!"
      );
    },
    // 上传图片成功
    imageSuccess(res, file) {
      console.log(file);
      if (res.code === 10000 || res.code === 0) {
        file.url = res.data.filePath;
        this.form.cover = res.data.filePath;
      } else {
        this.$Message.error(res.msg);
      }
    },
    // 打开图片
    openImage(file) {
      this.$openImg({
        url: file.url
      });
    },
    // 删除图片
    imageRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      this.form.bannerImage = "";
    },
    // 富文本上传图片
    imageAdded(file, Editor, cursorLocation, resetUploader) {
      console.log(11111);
      let formData = new FormData();
      formData.append("file", file);
      console.log(formData.append);
      this.$api.admin.upload(formData).then(res => {
        Editor.insertEmbed(cursorLocation, "image", res.filePath);
        resetUploader();
      });
    },
    submitForm(){
      this.modal1 = false
    },
    dete(){
      // 显示对话框
      this.dele=true;
    },
    sure(){
      this.dele=false;
    }
    }
  };
  