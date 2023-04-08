import "@/assets/scss/base.scss";
// 运行 mock 配置文件
import "@/mock/mock-config";
import { apiManager } from "@/network/network";
import { router } from "@/router/router";
// 引入 svg 图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@node/@fortawesome/fontawesome-free/scss/fontawesome.scss";
// 引入 使用到的 font-awesome 文件
import "@node/@fortawesome/fontawesome-free/scss/solid.scss";
import "@node/normalize.css/normalize.css";
import "@node/nprogress/nprogress.css";
import "@scss/rewrite-plugin-style/rewrite-nprogress.scss";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp, type App } from "vue";
import lazyPlugin from "vue3-lazy";
import RootContainer from "./App.vue";
import "./index.css";

const rootNode: App<Element> = createApp(RootContainer);
rootNode.config.performance = true;

Reflect.set(rootNode.config, "$api", apiManager);
lazyPlugin.install(rootNode, {
  loading: "/imgs/lazyload-hints/loading.gif",
  error: "/imgs/lazyload-hints/load-error.png",
});
rootNode.use(router);
const piniaInstance = createPinia();
piniaInstance.use(piniaPluginPersistedstate);
rootNode.use(piniaInstance);
rootNode.use(ElementPlus, {
  locale: zhCn,
});
// 注册 elementPlus 组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  rootNode.component(key, component);
}
rootNode.mount("#app");
