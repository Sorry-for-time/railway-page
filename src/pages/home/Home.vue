<template>
  <div class="content">
    <Suspense>
      <!-- 轮播图 -->
      <template #default>
        <Carousel />
      </template>

      <template #fallback>
        <LoadingBiggerHint loading-msg="just wait a moment" />
      </template>
    </Suspense>

    <!-- 内容 -->
    <Suspense>
      <template #default>
        <ContentBody />
      </template>

      <template #fallback>
        <LoadingBiggerHint
          loading-msg="PLEASE WAIT SIGNAL🐌"
          liner-angle="-45deg"
          liner-color-start="pink"
          liner-color-end="cyan"
          font-hint-size="6rem"
        />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import LoadingBiggerHint from "@/components/common/loading-hint/LoadingBiggerHint.vue";

const Carousel = defineAsyncComponent(
  () => import("@/components/carousel/Carousel.vue")
);

const ContentBody = defineAsyncComponent(
  () => import("@/components/contentBody/ContentBody.vue")
);
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}
</style>
