<template>
  <div class="calendar">
    <!-- 日历标题 -->
    <header class="calendar-header"></header>
    <!-- 日历主体 -->
    <main class="calendar-body">
      <!-- 周几提示 -->
      <div class="day-hint">
        <div class="day-item" v-for="(item, index) in dayHints">
          {{ item }}
        </div>
      </div>
      <!-- 日期 -->
      <div class="date-items">
        <div class="day-item" v-for="index in 31">{{ index }}</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const defaultStyleParams = defineProps({
  width: {
    type: String,
    default: "280px",
  },
  height: {
    type: String,
    default: "190px",
  },
});

interface Calendar {
  year: number;
  month: number;
  day: number;
}

const dayHints: Array<string> = reactive([
  "日",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
]);
</script>

<style lang="scss" scoped>
.calendar {
  width: v-bind(width);
  height: v-bind(height);
  background-color: gainsboro;
  box-shadow: 0 0 1px hsla(0, 0%, 0%, 0.705);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 23px calc(100% - 23px);

  .calendar-header {
    background-color: #fff;
  }

  .calendar-body {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px calc(100% - 20px);
    background-color: aquamarine;

    .day-hint {
      background-color: bisque;
      display: flex;
      align-items: center;
      .day-item {
        flex: 1;
        text-align: center;
        font-size: 10px;
        font-weight: 400;
        color: gray;
      }
    }

    .date-items {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(6, 1fr);
      background-color: blueviolet;
      align-items: center;

      .day-item {
        color: black;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        border: 1px solid gray;
      }
    }
  }
}
</style>
