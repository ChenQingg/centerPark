export default {
  data() {
    return {
      // 导航列表
      menuList: [
        // {
        //   name: "登录页",
        //   icon: "md-home",
        //   href: "/login"
        // },
        {
          name: "用户管理",
          icon: "md-contacts",
          children: [
            {
              name: "个人用户",
              href: "/personal"
            },
            {
              name: "商业用户",
              href: "/business"
            },
          ]
        },
        {
          name: "作品管理",
          icon: "md-cash",
          children: [
            {
              name: "商业用户",
              href: "/content"
            }
          ]
        },
        {
          name: "订单管理",
          icon: "md-cash",
          children: [
            {
              name: "订单管理",
              href: "/order"
            }
          ]
        },
        {
          name: "内容管理",
          icon: "md-cash",
          children: [
            {
              name: "内容管理",
              href: "/substance"
            }
          ]
        }

        // {
        //   name: "代理商管理",
        //   icon: "md-medal",
        //   children: [
        //     {
        //       name: "代理商列表",
        //       href: "/agent"
        //     },
        //     {
        //       name: "代理商业绩",
        //       href: "/agent-achievement"
        //     },
        //   ]
        // },
      ],
      // 导航默认选中
      menuActive: "",
      // 导航默认展开
      menuOpen: [],
      // 标签列表
      tagList: [
        {
          name: "个人用户",
          href: "/personal"
        }
      ],
      // 开始和结束的距离
      lastItemIndex: 0,
      itemIndex: 0,
      // 当前面包屑父级名称
      parentName: "",
      // 当前面包屑名称
      activeName: "",
      // 当前路由
      activeHref: "",
      // 用户信息
      userInfo: {}
    };
  },
  mounted() {
    //根据用户角色权限过滤菜单 （ps：新建菜单需要后端手动加路由 ！！）
    // this.initMenuByRole()

    // 更新导航
    this.updateMenu(this.$route.path);
    // 获取本地打开的标签列表
    if (window.sessionStorage.getItem("tagList")) {
      this.tagList = JSON.parse(window.sessionStorage.getItem("tagList"));
    } else {
      let tagList = [
        {
          name: "首页",
          href: "/personal"
        }
      ];
      window.sessionStorage.setItem("tagList", JSON.stringify(tagList));
    }
    // 获取用户信息
    this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  },
  methods: {
    initMenuByRole() {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo || !userInfo.authorities || !userInfo.authorities.length) {
        // debugger
        this.$router.replace({ path: "/login" });
        return;
      }
      //递归处理菜单
      const fn = data => {
        let arr = [];
        if (!data || !data.length) return null;
        data.forEach(el => {
          if (el.children && el.children.length) {
            arr.push({
              name: el.name,
              href: el.href,
              children: fn(el.children)
            });
          } else {
            arr.push({
              name: el.name,
              href: el.href
            });
          }
        });
        debugger;
        return arr;
      };
      // console.log(userInfo.authorities,fn(userInfo.authorities),'userInfo.authorities')
      this.menuList = fn(userInfo.authorities);
    },
    // 切换导航
    changeMenu(item) {
      this.menuActive = item;
      // 查看标签列表里是否有重复的
      let repeat = true;
      let href = "";
      this.tagList.forEach(c => {
        if (c.href.indexOf(item) > -1) {
          repeat = false;
          href = item;
        }
      });
      if (repeat) {
        // 添加标签
        this.menuList.forEach(e => {
          e.children.forEach(c => {
            if (item === c.href) {
              this.tagList.push({
                name: c.name,
                href: item
              });
              // 要展开分组的名称
              this.parentName = e.name;
              // 当前选中的名称
              this.activeName = c.name;
              // 当前选中的路由
              this.activeHref = c.href;
            }
          });
        });
        // 存放到本地
        window.sessionStorage.setItem("tagList", JSON.stringify(this.tagList));
        // 开始移动
        this.$nextTick(() => {
          this.lastItemIndex = this.$refs.tag.scrollLeft;
          this.itemIndex =
            this.$refs.tag.offsetWidth + this.$refs[item][0].$el.offsetWidth;
          this.moveSlow(this.lastItemIndex, this.itemIndex, 5);
        });
      } else {
        // 跳转到指定位置
        this.moveSlowTag(href);
        // 修改面包屑
        // this.menuList.forEach(e => {
        //   e.children.forEach(c => {
        //     if (item === c.href) {
        //       // 要展开分组的名称
        //       this.parentName = e.name;
        //       // 当前选中的名称
        //       this.activeName = c.name;
        //       // 当前选中的路由
        //       this.activeHref = c.href;
        //     }
        //   });
        // });
      }
    },
    // 打开对应标签
    openTag(item) {
      // 如果不是当前页
      if (item.href !== this.$route.path) {
        // 跳转到对应页面
        this.$router.push({
          path: item.href
        });
        // 更新导航
        this.updateMenu(item.href);
        // 跳转到指定位置
        this.moveSlowTag(item.href);
      }
    },
    // 标签跳转移动
    moveSlowTag(href) {
      // 容器宽度
      let boxWidth = this.$refs.tag.offsetWidth;
      // 当前点击元素距离
      let clickLeft = this.$refs[href][0].$el.offsetLeft - 39;
      // 当前点击元素宽度
      let clickWidth = this.$refs[href][0].$el.offsetWidth;
      // 开始移动
      this.lastItemIndex = this.$refs.tag.scrollLeft;
      this.itemIndex = clickLeft - boxWidth / 2 + clickWidth / 2;
      this.moveSlow(this.lastItemIndex, this.itemIndex, 5);
    },
    // 移动
    moveSlow(distance, total, step) {
      // 正向滚动 和 反向滚动
      if (this.lastItemIndex < this.itemIndex) {
        // 每隔1毫秒移动一小段距离，直到移动至目标至为止，反之亦然
        if (distance < total) {
          distance += step;
          this.$refs.tag.scrollLeft = distance;
          setTimeout(() => {
            this.moveSlow(distance, total, step);
          }, 1);
        } else {
          this.$refs.tag.scrollLeft = total;
        }
      } else if (this.lastItemIndex > this.itemIndex) {
        if (distance > total) {
          distance -= step;
          this.$refs.tag.scrollLeft = distance;
          setTimeout(() => {
            this.moveSlow(distance, total, step);
          }, 1);
        } else {
          this.$refs.tag.scrollLeft = total;
        }
      }
    },
    // 关闭标签
    tagClose(item, index) {
      // 删除对应标签
      this.tagList.splice(index, 1);
      // 如果是当前页面跳转到对应标签上一个标签页面
      if (item.href === this.menuActive) {
        // 跳转到指定页面
        this.$router.replace({
          path: this.menuActive
        });
        // 更新导航
        this.updateMenu(this.tagList[index - 1].href);
      }
      // 存放到本地
      window.sessionStorage.setItem("tagList", JSON.stringify(this.tagList));
    },
  
    // 更新导航状态
    updateMenu(path) {
      // 获取当前路由选中默认导航
      this.menuActive = path;
      // 找到要展开的分组;
      this.menuList.forEach((e, index) => {
        if (e.children && e.children.length > 0) {
          e.children.forEach(c => {
            if (this.menuActive === c.href) {
              // 要展开分组的下标
              this.menuOpen = [index];
              // 要展开分组的名称
              this.parentName = e.name;
              // 当前选中的名称
              this.activeName = c.name;
            }
          });
        }
      });
      // 更新展开状态
      this.$nextTick(() => {
        console.log(this.menuOpen);
        this.$refs.menu.updateOpened();
      });
    },
    // 退出登录
    logout(e) {
      if (e === "logout") {
        this.$router.replace({
          path: "/login"
        });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("token");
      } else if (e === "password") {
        this.$router.push({
          path: "/login"
        });
      }
    }
  }
};
