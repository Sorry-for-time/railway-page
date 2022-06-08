<template>
  <section>
    <!-- 标题 -->
    <header>
      <div class="left">铁路旅游</div>
      <div class="right"></div>
    </header>

    <!-- 列表 -->
    <div class="list">
      <div class="item" v-for="(value, index) in imgList" :key="index">
        <img :src="value" alt="" />
        <div class="title">2333</div>
        <div class="price">$233</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const imgList: Array<string> = reactive([
  "imgs/railway-line/10059.jpg",
  "imgs/railway-line/10060.jpg",
  "imgs/railway-line/10061.jpg",
  "imgs/railway-line/10062.jpg",
  "imgs/railway-line/10063.jpg",
  "imgs/railway-line/10064.jpg",
  "imgs/railway-line/10065.jpg",
  "imgs/railway-line/10066.jpg",
]);
</script>

<style lang="scss" scoped>
section {
  margin: 40px auto;
  width: 1200px;

  header {
    width: 98%;
    margin: 0 auto;
    height: 45px;

    display: grid;
    grid-template-columns: 74px calc(100% - 74px);
    align-items: center;
    justify-content: center;

    .left {
      text-align: center;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      font-weight: 500;
      color: hsl(211, 97%, 61%);
      border-bottom: 2px solid hsl(211, 97%, 61%);
    }
    .right {
      height: 45px;
      border-bottom: 2px solid hsl(0, 0%, 87%);
    }
  }

  .list {
    margin: 10px 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 288px);
    grid-template-rows: repeat(2, 244px);
    gap: 10px;

    .item {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.747);
      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
      }

      .title {
        margin: 10px 8px;
        font-size: 15px;
        font-weight: 500;
        overflow: hidden;
        color: black;
      }

      .price {
        margin: 10px 10px;
        color: orange;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
