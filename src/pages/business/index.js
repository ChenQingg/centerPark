const tableColumns = [
    {
      title: "作品Id",
      key: "id",
      align: "center",
    },
    {
      title: "用户账号",
      width: 100,
      key: "account",
      align: "center",
    },
    {
      title: "用户昵称",
      key: "name",
      align: "center",
    },
    {
        title: "作品图片",
        key: "cover",
        align: "center",
    },
    {
      title: "发售时间",
      key: "registerTime",
      align: "center",
      
    },
    {
      title: "铸造时间",
      key: "RealTime",
      align: "center",
    },
    {
        title: "发售数量",
        key: "num",
        align: "center",
    },
    {
        title: "价格",
        key: "price",
        align: "center",
    },
    {
      title: "审核状态",
      key: "status",
      align: "center",
    },
    {
        title: "销售状态",
        key: "status",
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
        //搜索框
        value: '',
        //选择器
        model1:"",
        // 单选按钮
        disabledGroup: '通过',
        // 编辑(详情)对话框
        modal: false,
        // 编辑(创作信息)对话框
          modal1: false,
          value6:"",
          // 上传图片
          uploadList:[],
          fileList:[],
          action:"",
           // 上传组件的headers
      headers: {},
        //编辑对话框标题
        modalTitle:"",
         // 表格加载状态
        loading: false,
        // 表格配置
        tableColumns: tableColumns,  
        // 表单数据
          tableData: [
            {
              id:123456,
              account:2356865,
              cover:123123,
              num:12,
              price:"￥136",
              name:"张三",
              registerTime:"2022-12-12 12:23:20",
              RealTime:"2022-12-12 12:23:20",
              status:"未审核"
            }
          ],
            // 分页数据
        page: {
            num: 1,
            size: 10,
            total: 0
          },
    }
    },
methods:{
    pageChange(){

    },
    sizeChange(){

    },
    // 点击编辑弹出对话框
    editForm(){
      this.modalTitle = "用户详情";
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
      // 对话框创作信息的确定取消事件
      ok () {
        this.$Message.info('点击了确定');
    },
    cancel () {
        this.$Message.info('点击了取消');
    }
},
mounted () {
  this.uploadList = this.$refs.upload.fileList;
}
  }