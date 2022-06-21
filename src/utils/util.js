export function getDeptTree() {
  return new Promise((resolve, reject) => {
    this.$api.platform
      .getStructureList({})
      .then(res => {
        const setTree = array => {
          if (array && array.length > 0) {
            array.forEach(item => {
              item.title = item.deptName || "";
              item.label = item.deptName || "";
              item.contextmenu = true;
              item.expand = true;
              item.value = item.id;

              if (item.children && item.children.length > 0) {
                setTree(item.children);
              } else {
                item.children = [];
              }
            });
          }
        };
        setTree(res);
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function findParentId(data, val) {
  const loopData = function(data, val) {
    //递归父级key
    for (const element of data) {
      if (element.id == val) {
        return [element.id];
      }
      if (element.children) {
        var far = loopData(element.children, val);
        if (far) {
          return far.concat(element.id);
        }
      }
    }
  };

  //调用
  const result = loopData(data, val);
  if (result) {
    return result.reverse();
  } else {
    return [];
  }
}

function dateFormat(fmt, date) {
  if(!date) return undefined
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
}


export default {
  dateFormat: dateFormat,
  findParentId: findParentId,
}