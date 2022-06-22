import App from "./App.vue";
import { createApp } from "vue";
import { router } from "@/router/router";
import lazyPlugin from "vue3-lazy";

// 引入 svg 图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "@/assets/scss/base.scss";
import "@node/font-awesome/scss/font-awesome.scss";
import "@node/nprogress/nprogress.css";
import "@scss/rewrite-plugin-style/rewrite-nprogress.scss";

const app = createApp(App);

lazyPlugin.install(app, {
  loading: "/imgs/lazyload-hints/loading.gif",
  error: "/imgs/lazyload-hints/load-error.png",
});
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
