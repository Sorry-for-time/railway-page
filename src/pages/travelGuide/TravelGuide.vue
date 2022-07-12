<template>
  <section class="box">
    <div class="box-left"></div>
    <div class="box-center"></div>
    <div class="box-right"></div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue";
import { useMapData } from "@/store/useMapData";
const mapData = useMapData();

onMounted(() => {});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 630px;
  display: grid;

  background: scroll center no-repeat url("/bgc.png");
  background-size: cover;

  &-left {
  }

  &-center {
  }

  &-right {
  }
}
</style>
