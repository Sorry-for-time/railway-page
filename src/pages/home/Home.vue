<template>
  <Suspense>
    <template #default>
      <Carousel />
    </template>

    <template #fallback>
      <LoadingBiggerHint loading-msg="just wait a moment" />
    </template>
  </Suspense>

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
