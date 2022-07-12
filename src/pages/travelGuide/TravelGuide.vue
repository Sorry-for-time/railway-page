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
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 1fr;
  overflow: hidden;

  background: scroll center no-repeat url("/bgc.png");
  background-size: cover;

  &-left {
    backdrop-filter: blur(12px);
  }

  &-center {
    box-shadow: 0 0 3px black;
  }

  &-right {
    backdrop-filter: blur(12px);
  }
}
</style>
