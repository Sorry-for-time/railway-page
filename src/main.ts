import { createApp } from "vue";
import App from "./App.vue";
// 引入 svg 图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "@/assets/scss/base.scss";
import "@node/font-awesome/scss/font-awesome.scss";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
