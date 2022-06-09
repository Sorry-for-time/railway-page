<template>
  <!-- 页首 -->
  <Suspense>
    <template #default>
      <PageHeader />
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <Carousel />
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <ContentBody />
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <PageFooter />
    </template>
  </Suspense>

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
const Carousel = defineAsyncComponent(
  () => import("@/components/carousel/Carousel.vue")
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
