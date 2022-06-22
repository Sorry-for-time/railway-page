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
        <img v-lazy="value.imgUrl" alt="图片加载错误" />
        <div class="title">{{ value.description }}</div>
        <div class="price"><span>¥</span>{{ value.price }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface LineDetail {
  imgUrl: string;
  description: string;
  price: number;
}

const imgList: Array<LineDetail> = reactive([
  {
    imgUrl: "imgs/railway-line/10059.jpg",
    description: "环西部火车游” 高品质旅游版专线列车",
    price: 2560,
  },
  {
    imgUrl: "imgs/railway-line/10060.jpg",
    description: "环西部火车游” 陇上江南·行摄山>水陇南三日游",
    price: 930,
  },

  {
    imgUrl: "imgs/railway-line/10061.jpg",
    description: "环西部火车游”华夏寻根·人文始祖天水两日游",
    price: 980,
  },

  {
    imgUrl: "imgs/railway-line/10062.jpg",
    description: "环西部火车游”精品旅游线路",
    price: 980,
  },

  {
    imgUrl: "imgs/railway-line/10063.jpg",
    description: "环西部火车游”美丽甘南三日游",
    price: 880,
  },

  {
    imgUrl: "imgs/railway-line/10064.jpg",
    description: "环西部火车游” 青海湖、茶卡2日>游",
    price: 880,
  },

  {
    imgUrl: "imgs/railway-line/10065.jpg",
    description: "“环西部火车游”嘉敦5日游",
    price: 1260,
  },

  {
    imgUrl: "imgs/railway-line/10066.jpg",
    description: "“环西部火车游” 敦煌一地三日游",
    price: 1380,
  },
]);
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
          color: hsl(30, 100%, 50%);
        }
      }
    }
  }
}
</style>
