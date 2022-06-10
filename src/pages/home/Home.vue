<template>
  <Carousel />
  <ContentBody />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Carousel = defineAsyncComponent(
  () => import("@/components/carousel/Carousel.vue")
);

const ContentBody = defineAsyncComponent(
  () => import("@/components/contentBody/ContentBody.vue")
);
</script>
