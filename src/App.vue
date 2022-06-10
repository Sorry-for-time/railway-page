<template>
  <!-- 页首 -->
  <Suspense>
    <template #default>
      <PageHeader />
    </template>
  </Suspense>

  <!-- 内容主体 -->
  <router-view />

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
import { defineAsyncComponent, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import LoadingCommonHint from "@/components/common/loading-hint/LoadingCommonHint.vue";

const PageHeader = defineAsyncComponent(
  () => import("@/components/pageHeader/PageHeader.vue")
);
const ContentBody = defineAsyncComponent(
  () => import("@/components/contentBody/ContentBody.vue")
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
  width: 100%;
  background: white;
}
</style>
