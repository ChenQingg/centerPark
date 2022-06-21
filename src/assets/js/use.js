import Vue from 'vue';
import UploadTool from '../../components/openImage/index.vue';
let uploadFileInstance = null;
let init = () => {
    let uploadFileConstructor = Vue.extend(UploadTool);
    // 构造函数可以传参，data，method
    uploadFileInstance = new uploadFileConstructor({});
    uploadFileInstance.$mount();
    document.getElementById("app").appendChild(uploadFileInstance.$el);
};
let caller = (options) => {
    if(!uploadFileInstance) {
        init(options);
    }
    // uploadTool.vue 中使用getParams接收调用时传入的参数。 type: image等
    uploadFileInstance.getParamsItem(options);
};
export default {
    install(Vue) {
        Vue.prototype.$openImg = caller;
    }
}
