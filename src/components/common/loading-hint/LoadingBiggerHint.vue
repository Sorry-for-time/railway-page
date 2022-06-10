<template>
  <p class="loading-style">
    {{ receive.loadingMsg }}
    {{ currentEndWords }}
  </p>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const receive = defineProps({
  /**
   * @description 加载时的提示信息
   */
  loadingMsg: {
    type: String,
    default: "Loading",
  },

  /**
   * @description 跑马灯效果延时
   */
  dotStepDelay: {
    type: Number,
    default: 400,
  },

  /**
   * @description 字体大小
   */
  fontHintSize: {
    type: String,
    default: "4rem",
  },

  /**
   * @description 渐变颜色角度
   */
  linerAngle: {
    type: String,
    default: "0deg",
  },

  /**
   * @description 起始渐变颜色
   */
  linerColorStart: {
    type: String,
    default: "hsl(224, 98%, 52%)",
  },

  /**
   * @description 起始渐变颜色
   */
  linerColorEnd: {
    type: String,
    default: "rgb(80, 255, 255)",
  },

  /**
   * @description 尾部跑马灯内容
   */
  endLoopingWords: {
    type: String,
    default: "...",
  },
});

const currentEndWords = ref("");
let count = 0;
let interval: number;
onMounted(() => {
  interval = window.setInterval(() => {
    count = ++count % (receive.endLoopingWords.length + 1);
    currentEndWords.value = receive.endLoopingWords.substring(0, count);
  }, receive.dotStepDelay);
});

// 销毁定时器
onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<style lang="scss" scoped>
@import "@scss/util/options.scss";
.loading-style {
  z-index: 66;
  text-align: center;
  font-size: v-bind(fontHintSize);
  font-weight: 900;

  width: 100%;
  margin: 40px;
  height: 100px;

  @include text-clip-fn(
    v-bind(linerAngle),
    v-bind(linerColorStart),
    v-bind(linerColorEnd)
  );
}
</style>
