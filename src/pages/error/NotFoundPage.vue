<template>
  <div class="error-hint">
    <span @click="goHomePage">点击这里返回主页</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// 定向到首页
const router = useRouter();

function goHomePage(): void {
  router.replace({
    name: "home",
  });
}
</script>

<style lang="scss" scoped>
@import "@scss/util/options.scss";

.error-hint {
  width: 100%;
  height: 60vh;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  color: black;
  background: scroll no-repeat url("./images/very_sorry.png");
  background-position: center -3px;

  span {
    display: inline-block;
    position: relative;
    margin-top: 25vh !important;
    font-weight: 400;
    @include text-clip-fn(23deg);
    cursor: pointer;
    transform: rotate(-3deg);
    border-bottom: 5px solid rgb(68, 93, 235);

    &::after {
      content: "";
      position: absolute;
      left: -30px;
      top: -20px;
      right: -30px;
      bottom: -30px;
      border: 8px dashed rgb(81, 195, 230);
      border-radius: 6px;
    }
  }
}
</style>
