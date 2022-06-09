<template>
  <section class="img-brand-list">
    <div class="item" v-for="(value, index) in imgList" :key="index">
      <img :src="value" alt="貌似图片木有能加载出来???🥲" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const imgList: Array<string> = reactive([
  "imgs/brand-list/10002.jpg",
  "imgs/brand-list/10003.jpg",
  "imgs/brand-list/10004.jpg",
  "imgs/brand-list/10005.jpg",
]);
</script>

<style lang="scss" scoped>
.img-brand-list {
  height: 360px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 590px 590px;
  grid-template-rows: 1fr afr;
  justify-content: center;
  gap: 10px;

  .item {
    background-color: antiquewhite;
    overflow: hidden;
    transition: 200ms ease-out;
    box-shadow: 0 1px 4px hsla(0, 0%, 5%, 0.459);
    border-radius: 3px;

    &:hover {
      transform: translateY(-5px);
      img {
        transform: scale(1.03);
        filter: grayscale(0) saturate(1.1) brightness(1.03);
        cursor: pointer;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 200ms ease-out;
      filter: grayscale(0.1);
    }
  }
}
</style>
