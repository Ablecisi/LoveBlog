import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import { request as axios } from "./utils/request"; // 通过import {request} from '@/utils/request'引入axios
import router from "./router";
import "./style/dist/global.scss";

// 创建Vue实例
const app = createApp(App);
// 挂载路由
app.use(router);

// 使用ElementPlus组件库,并设置为中文
app.use(ElementPlus, {
  locale: zhCn,
});

// 通过provide方法将axios挂载到app上,如果不挂载到app上,则在组件中无法通过this.$axios访问axios
app.provide("axios", axios); 
// 通过config.globalProperties将axios挂载到app上,如果不挂载到app上,则在组件中无法通过this.$http访问axios
// 如果不想挂载到app上,则可以在组件中通过import {request} from '@/utils/request'引入axios
app.config.globalProperties.$http = axios;

// 使用导航守卫设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'LoveBlog';
  next();
});

app.mount("#app");