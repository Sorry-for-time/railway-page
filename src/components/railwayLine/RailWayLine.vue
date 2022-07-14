<template>
  <section>
    <!-- 标题 -->
    <header>
      <div class="left">铁路旅游</div>
      <div class="right"></div>
    </header>

    <!-- 列表 -->
    <div class="list">
      <div class="item" v-for="(value, index) in imgList.data" :key="index">
        <img v-lazy="value.imgUrl" alt="图片加载错误" />
        <div class="title">{{ value.description }}</div>
        <div class="price"><span>¥</span>{{ value.price }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from "vue";
import { requestRailwayLinesData } from "@/network/apis/apis";

type LineDetail = {
  imgUrl: string;
  description: string;
  price: number;
};

let imgList: { data: Array<LineDetail> } = reactive({ data: [] });
onBeforeMount(async () => {
  const result: any = await requestRailwayLinesData();
  if (result.code === 200) {
    imgList.data = result.data;
  }
});
</script>

<style lang="scss" scoped>
section {
  margin: 40px auto;
  width: 100%;

  header {
    width: 100%;
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
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 244px);
    gap: 10px;

    .item {
      overflow: hidden;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.747);

      &:hover {
        cursor: pointer;
      }

      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        transition: 200ms ease-out;
        filter: brightness(0.9);

        &:hover {
          transform: scale(1.03);
          cursor: pointer;
          // css3 滤镜皮一下就很开心
          filter: brightness(1.1) saturate(1.1);
        }
      }

      .title {
        margin: 10px 8px;
        font-size: 15px;
        font-weight: 500;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: black;
      }

      .price {
        margin: 10px 10px;
        color: hsl(30, 100%, 50%);
        font-size: 18px;
        font-weight: 500;

        span {
          margin-right: 5px;
          font-size: 15px;
          font-weight: 600;
          color: inherit;
        }
      }
    }
  }
}
</style>
