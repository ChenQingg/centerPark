// **api接口的统一出口**

// 账号管理接口
import admin from './api/admin.js';
// 平台商城接口
import platform from './api/platform.js';

// 导出接口
export default {
    admin,
    platform,
}
