<template>
  <section>
    <ol>
      <li v-for="(value, index) in serviceList" :key="index">
        <span></span>
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
      }

      a {
        display: block;
        margin-top: 5px;
        color: black;
        font-size: 15px;
        font-weight: 500;
        text-align: center;
      }

      // 这操蛋的精灵图切图位置不按照布局顺序
      $unit-list: (
        -40px,
        -200px,
        -120px,
        -160px,
        -80px,
        -240px
      ); /* 各个位置的单位 */

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
