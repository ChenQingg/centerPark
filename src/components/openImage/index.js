export default {
    name: "openImage",
    data() {
        return {
            url: "",
            visible: false
        }
    },
    methods: {
        // 获取携带的参数
        getParamsItem(options) {
            this.url = options.url;
            this.visible = true;
        }
    }
}
