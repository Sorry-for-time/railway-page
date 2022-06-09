<template>
  <nav>
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

    <div>
      <p class="fa fa-close"></p>
      <span>关闭</span>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 50px;
  top: 20vh;
  right: 0%;

  // 当点击关闭按钮时
  &.when-close {
    display: none;
  }

  div {
    display: block;
    margin-top: 5px;
    z-index: 666;
    width: 100%;
    height: 80px;
    background-color: hsl(0, 0%, 94%);

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
