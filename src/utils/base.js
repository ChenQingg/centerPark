// **全局变量**
const e = process.env;
console.log(e, "eeeeeee");
const base = {
  //
  // 地址
  // dev: "http://debug.bodongshi.cn:18899",
  // test: "https://debug.bodongshi.com",
  // 测试
  // fm: 'http://richcat.vaiwan.com/',

  //2022-3-10 测试
  // fm: 'http://richcat.isoft.mobi/',

  //后端本地
  // fm: 'http://richcat.feetsheep.com/',
  // fm: "http://192.168.3.30:10093/",
  // fm: "http://run-shutter.isoft.mobi/",
  // url: "http://run-shutter.isoft.mobi/",

  // 地址前缀
  // api: "division/api/v1/division/",
  // 富文本配置文件
  editor: [
    [
      "bold",
      "italic",
      "underline",
      "strike",
      "link",

      { color: [] },
      { background: [] },
      { font: [] },
      { size: [] }
    ],
    [{ header: 1 }, { header: 2 }],
    [{ align: [] }],
    ["image", "video"]
  ]
};

export default base;
