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
  </Suspense>

  <!-- 右侧工具栏 -->
  <Suspense>
    <template #default>
      <HelpBar />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

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
</script>

<style lang="scss">
#app {
  width: 100%;
  background: white;
}
</style>
