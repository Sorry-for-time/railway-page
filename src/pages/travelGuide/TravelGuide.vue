<template>
  <div class="epidemic-map">
    <h1>疫情可视化</h1>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue";
import { requestMapData } from "@/network/apis/apis";

onBeforeMount(() => {
  requestMapData().then((res) => {
    console.log(res.data.data);
  });
});

onMounted(() => {
  console.log("=".repeat(12), "Travel Guide", "=".repeat(12));
});
</script>

<style lang="scss" scoped>
.epidemic-map {
  width: 100%;
  height: 630px;
  display: grid;
  background: scroll center no-repeat url("/bgc.png");
  background-size: cover;

  h1 {
    color: rgb(241, 252, 252);
    text-shadow: 1px 1px 2px black;
    margin-top: 20vh;
    text-align: center;
    font-size: 5rem;
    font-weight: 500;
  }
}
</style>
