<template>
  <section>
    <ol>
      <li v-for="(value, index) in serviceList" :key="index">
        <span>
          <!-- 分割线图片, 且最后一张不加载出来 -->
          <img
            src="/imgs/service-list/split-line.png"
            alt="这个不可能加载不出来(理直气壮)"
            v-if="index !== serviceList.length - 1"
          />
        </span>
        <a>{{ value }}</a>
      </li>
    </ol>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const serviceList: Array<String> = reactive([
  "重点预约客",
  "遗失物品查找",
  "共享汽车",
  "便民托运",
  "车站引导",
  "站车风采",
  "用户反馈",
]);
</script>

<style lang="scss" scoped>
section {
  width: 100%;

  ol {
    display: grid;
    grid-template-columns: repeat(7, 170px);
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    height: 136px;

    li {
      height: 136px;
      width: 170px;

      span {
        display: block;
        // 精灵图
        width: 40px;
        height: 40px;
        margin: 0 auto;
        margin-top: 33px;
        background: url("imgs/service-list/service.png") no-repeat;
        position: relative;
        transition: 100ms ease-out;

        &:hover {
          transform: scale(1.2);
          filter: brightness(1.1);
          cursor: pointer;
        }

        img {
          position: absolute;
          height: 50px;
          right: -60px;
          top: 10px;
        }
      }

      a {
        display: block;
        margin-top: 5px;
        color: black;
        font-size: 15px;
        font-weight: 500;
        text-align: center;
      }

      $unit-list: (-40px, -200px, -120px, -160px, -80px, -240px);
      @each $start in $unit-list {
        $index: index($unit-list, $start);
        &:nth-child(#{$index}) span {
          background-position: 0 #{$start};
        }
      }
    }
  }
}
</style>
