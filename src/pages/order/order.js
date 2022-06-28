const tableColumns = [
    {
      title: "订单号",
      key: "orderNumber",
      align: "center",
      
    },
    {
      title: "藏品金额",
      width: 100,
      key: "amount",
      align: "center",
    },
    {
      title: "作品名称",
      key: "name",
      align: "center",
    },
    {
        title: "作品图片",
        key: "cover",
        align: "center",
    },
    {
      title: "持有者昵称",
      key: "nickname",
      align: "center",
      
    },
    {
      title: "购买者昵称",
      key: "BuyName",
      align: "center",
    },
    {
      title: "下单时间",
      key: "OrderTime",
      align: "center",
  },
    {
        title: "支付时间",
        key: "PaymentTime",
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
        // 详情对话框
        modal1: false,
        // 对话框名称
        modalTitle:"",   
        //  input输入框
        value6:"",
         // 表格加载状态
        loading: false,
        // 表格配置
        tableColumns: tableColumns,  
        // 表单数据
          tableData: [
            {
              orderNumber:123456,
              amount:"￥2356",
              name:"舔狗",
              cover:"cover",
              nickname:"张校长",
              BuyName:"李三",
               OrderTime:"2022-12-12 12:23:20",
               PaymentTime:"2022-12-12 12:23:20",
             
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
    detialForm(){
      // 弹出对话框
          this.modal1=true;
          this.modalTitle="订单详情"
    },
    ok () {
      this.$Message.info('点击了确定');
  },
}
  }