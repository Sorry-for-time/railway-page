<template>
  <nav :class="{ 'when-close': needClose }">
    <div>
      <p class="fa fa-volume-up"></p>
      <span>最新发布</span>
    </div>

    <div>
      <p class="fa fa-phone"></p>
      <span>联系客服</span>
    </div>

    <div>
      <p class="fa fa-qrcode"></p>
      <span>APP下载</span>
    </div>

    <div @click="close">
      <p class="fa fa-close"></p>
      <span>关闭</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const needClose = ref(false);
function close() {
  needClose.value = true;
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 50px;
  top: 20vh;
  right: 4px;

  // 当点击关闭按钮时
  &.when-close {
    display: none;
  }

  div {
    display: block;
    margin-top: 8px;
    z-index: 666;
    width: 100%;
    height: 80px;
    border-radius: 2px;
    background-color: hsl(0, 0%, 94%);
    box-shadow: 0 0 3px hsla(0, 0%, 0%, 0.452);

    transition: 200ms ease-out;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 8px white;

      p,
      span {
        transform: scale(1.02);
        color: hsla(209, 100%, 37%, 0.801);
        cursor: pointer;
      }
    }

    p {
      margin: 0 auto;
      padding-top: 10px;
      display: block;
      width: 25px;
      color: hsl(0, 0%, 40%);
      font-size: 25px;
    }

    span {
      margin: 0 auto;
      margin-top: 5px;
      display: block;
      width: 35px;
      font-size: 15px;
      color: hsl(0, 0%, 40%);
      font-size: 14px;
    }
  }
}
</style>
