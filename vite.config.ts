import { join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

/**
 * @description 返回项目下对应文件夹路径绝对值
 * @param {string} ProjectDirectoryName
 * @return {*}  {string}
 */
const aliasPath: Function = (ProjectDirectoryName: string): string => {
  return join(__dirname, ProjectDirectoryName);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
      "@": aliasPath("src"),
      "@node": aliasPath("node_modules"),
    },
  },

  server: {
    port: 3000,
  },
});
