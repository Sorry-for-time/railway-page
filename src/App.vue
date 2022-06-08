<template>
  <!-- 页首 -->
  <PageHeader />
  <Carousel />
  <ServiceListVue />
  <ServiceBrand />
  <RailWayLine />
</template>

<script setup lang="ts">
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import ServiceListVue from "@/components/serviceList/ServiceList.vue";
import ServiceBrand from "@/components/serviceBrand/ServiceBrand.vue";
import RailWayLine from "@/components/railwayLine/RailWayLine.vue";
</script>

<style lang="scss">
#app {
  width: 100vw;
  background: white;
}
</style>
