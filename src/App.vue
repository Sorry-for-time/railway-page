<template>
  <!-- 页首 -->
  <Suspense>
    <template #default>
      <PageHeader />
    </template>
  </Suspense>

  <!-- 内容主体 -->
  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <keep-alive max="8" :exclude="['Login', 'Register']">
        <div :key="$route.path">
          <component :is="Component" />
        </div>
      </keep-alive>
    </Transition>
  </router-view>

  <!-- 页脚 -->
  <Suspense>
    <template #default>
      <PageFooter />
    </template>
    <template #fallback>
      <LoadingCommonHint />
    </template>
  </Suspense>

  <!-- 右侧工具栏 -->
  <HelpBar v-show="isNeedShowSideBar" />
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  getCurrentInstance,
  provide,
  ref,
  watchEffect,
} from "vue";
import { useRoute } from "vue-router";
import LoadingCommonHint from "@/components/common/loading-hint/LoadingCommonHint.vue";
import { AxiosInstance } from "axios";

const App = getCurrentInstance()!;
const $api: AxiosInstance = Reflect.get(App.appContext.config, "$api");
provide("$api", $api);

const PageHeader = defineAsyncComponent(
  () => import("@/components/pageHeader/PageHeader.vue")
);

const PageFooter = defineAsyncComponent(
  () => import("@/components/pageFooter/PageFooter.vue")
);

const HelpBar = defineAsyncComponent(
  () => import("@/components/helpBar/HelpBar.vue")
);

const route = useRoute();

const isNeedShowSideBar = ref(true);

watchEffect(() => {
  // 监听路由信息, 决定是否展示侧边栏工具
  if (!route.path.includes("home")) {
    isNeedShowSideBar.value = false;
  } else {
    isNeedShowSideBar.value = true;
  }
});
</script>

<style lang="scss">
#app {
  width: clamp(1200px, 100%, 2000px);
  background: white;
}
</style>

<style lang="scss" scoped>
// 路由组件入场动画
@keyframes fade {
  from {
    filter: opacity(0.5);
  }
  to {
    filter: opacity(1);
  }
}

// 路由组件离场动画
@keyframes fade-pined {
  from {
    // 使元素不占据页面宽度
    top: 120px;
    right: 0%;
    left: 0%;
    filter: opacity(1);
  }
  to {
    top: 120px;
    right: 0%;
    left: 0%;
    filter: opacity(0);
  }
}

.fade-enter-active {
  animation: fade 800ms ease-out forwards;
}
.fade-leave-active {
  display: none;
  position: fixed;
  animation: fade-pined 800ms ease-in forwards;
}
</style>
