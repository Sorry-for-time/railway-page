import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "@/assets/scss/base.scss";
import "@node/font-awesome/scss/font-awesome.scss";

createApp(App).use(ElementPlus).mount("#app");
