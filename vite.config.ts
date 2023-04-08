import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

/**
 * @description 返回项目下对应文件夹路径绝对值
 * @param {string} directoryName
 * @return {string}
 */
function getPath(directoryName: string): string {
  return fileURLToPath(new URL(directoryName, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // element-ui 按需引入配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    // 设置路径别名
    alias: {
      "@": getPath("./src"),
      "@node": getPath("./node_modules"),
      "@scss": getPath("./scss"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    minify: "esbuild",
  },
});
