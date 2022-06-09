<template>
  <div class="wrapper">
    <Suspense>
      <template #default>
        <ServiceListVue />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <ServiceBrand />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <RailWayLine />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Announcement />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const ServiceListVue = defineAsyncComponent(
  () => import("@/components/serviceList/ServiceList.vue")
);

const ServiceBrand = defineAsyncComponent(
  () => import("@/components/serviceBrand/ServiceBrand.vue")
);
const RailWayLine = defineAsyncComponent(
  () => import("@/components/railwayLine/RailWayLine.vue")
);
const Announcement = defineAsyncComponent(
  () => import("@/components/announcement/Announcement.vue")
);
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1200px;
  margin: 0 auto;
}
</style>
