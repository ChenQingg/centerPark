const tableColumns = [
  {
    title: "用户编号",
    key: "number",
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
    title: "注册时间",
    key: "registerTime",
    align: "center",
    
  },
  {
    title: "实名认证时间",
    key: "RealTime",
    align: "center",
  },
  {
    title: "审核状态",
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
      //详情对话框
      modal:false, 
      //编辑对话框
      modal1:false,
      // 详情对话框标题
      modalTitle: "",
      // 单选默认值
      disabledGroup:"审核通过",
      //编辑对话框标题
      modalTitle1: "",
      // 编辑输入框内容
      value6: '',
       // 表单
       //form: {},
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
            number:123456,
            account:2356865,
            name:"张三",
            registerTime:"2022-12-12 12:23:20",
            RealTime:"2022-12-12 12:23:20",
            status:"未审核"
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
        this.modalTitle1 = "编辑内容";
        // 打开弹窗
        this.modal1 = true;
      },
   
    details(){
      this.modalTitle = "用户详情";
      // 打开弹窗
      this.modal = true;
    },
    pageChange(){

    },
    sizeChange(){

    }
  }
};
