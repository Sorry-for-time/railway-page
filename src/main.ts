import App from "./App.vue";
import { createApp } from "vue";
import { router } from "@/router/router";

// 引入 svg 图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "@/assets/scss/base.scss";
import "@node/font-awesome/scss/font-awesome.scss";
import "@node/nprogress/nprogress.css";

const app = createApp(App);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
