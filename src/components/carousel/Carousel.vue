<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="490px">
      <el-carousel-item v-for="(item, key) in imgList" :key="key">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const imgList = reactive([
  "imgs/banner/banner10.jpg",
  "imgs/banner/banner12.jpg",
  "imgs/banner/banner26.jpg",
]);
</script>

<style scoped>
.el-carousel__item img {
  color: #475669;
  opacity: 0.75;
  height: 490px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
