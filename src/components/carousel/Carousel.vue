<template>
  <div class="carousel">
    <!-- 轮播图 -->
    <el-carousel trigger="click" height="490px">
      <el-carousel-item v-for="(item, key) in imgList" :key="key">
        <img v-lazy="item" alt="" />
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索栏工具 -->
    <div class="fix-tool">
      <SearchTools />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { defineAsyncComponent, ref } from "vue";

const SearchTools = defineAsyncComponent(() => import("@/components/searchTools/SearchTool.vue"));
const imgList: Ref<Array<string>> = ref([
  "/imgs/banner/banner10.jpg",
  "/imgs/banner/banner12.jpg",
  "/imgs/banner/banner26.jpg",
]);
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  position: relative;

  .fix-tool {
    position: absolute;
    left: 360px;
    top: 45px;
  }
}
</style>

<style lang="scss" scoped>
.el-carousel__item img {
  color: #475669;
  opacity: 0.75;
  height: 490px;
  margin: 0;
  text-align: center;
  width: 100%;
  object-fit: cover;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
