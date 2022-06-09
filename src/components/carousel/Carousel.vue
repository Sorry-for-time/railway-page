<template>
  <div class="outer">
    <!-- 轮播图 -->
    <el-carousel trigger="click" height="490px">
      <el-carousel-item v-for="(item, key) in imgList" :key="key">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="tool-frame"></div>
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

<style lang="scss" scoped>
.outer {
  position: relative;

  .tool-frame {
    z-index: 233;
    position: absolute;
    left: 200px;
    top: 50px;
    width: 515px;
    height: 352px;
    outline: none;
    backdrop-filter: blur(10px);
    background: scroll center no-repeat
      linear-gradient(hsla(300, 98%, 32%, 0.151), hsla(240, 100%, 42%, 0.151));
    box-shadow: 0 0 6px hsla(0, 0%, 5%, 0.459),
      0 0 5px 2px hsla(0, 0%, 25%, 0.89) inset;
    border: 1px solid hsla(0, 0%, 41%, 0.253);
    border-radius: 12px;
  }
}

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
