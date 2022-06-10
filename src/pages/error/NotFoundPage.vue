<template>
  <div class="error-hint">
    抱歉, 没找到页面😓,<span @click="goHomePage">点击这里返回主页</span>
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
.error-hint {
  margin-top: 30px;
  width: 100%;
  height: 50vh;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  color: black;

  span {
    color: cadetblue;
    text-decoration: underline;
    font-weight: 500;
  }
}
</style>
