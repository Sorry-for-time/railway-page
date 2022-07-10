import "@node/normalize.css/normalize.css";

import RootContainer from "./App.vue";
import { App, createApp } from "vue";
import { router } from "@/router/router";
import lazyPlugin from "vue3-lazy";
import { apiManager } from "@/network/network";

// 运行 mock 配置文件
import "@/mock/mock-config";

// 引入 svg 图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@/assets/scss/base.scss";
import "@node/font-awesome/scss/font-awesome.scss";
import "@node/nprogress/nprogress.css";
import "@scss/rewrite-plugin-style/rewrite-nprogress.scss";

const rootNode: App<Element> = createApp(RootContainer);
Reflect.set(rootNode.config, "$api", apiManager);
lazyPlugin.install(rootNode, {
  loading: "/imgs/lazyload-hints/loading.gif",
  error: "/imgs/lazyload-hints/load-error.png",
});
rootNode.use(router);
// 注册 elementPlus 组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  rootNode.component(key, component);
}
rootNode.mount("#app");
