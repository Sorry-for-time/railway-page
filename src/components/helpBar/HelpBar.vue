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

    <div
      class="show-qrcode"
      @mouseenter.stop="isQrCodeAreaShow = true"
      @mouseleave.stop="isQrCodeAreaShow = false"
    >
      <transition name="code-show">
        <div
          class="show"
          v-show="isQrCodeAreaShow"
          @mouseenter.stop="isQrCodeAreaShow = false"
          @mouseleave.stop="isQrCodeAreaShow = false"
        >
          <h3>铁路12306</h3>
          <section class="frame">
            <img src="imgs/footer/qr-codes/10018.png" alt="" />
            <div class="hint-message">
              官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。
            </div>
          </section>
        </div>
      </transition>

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
const isQrCodeAreaShow = ref(false);

const needClose = ref(false);
function close() {
  needClose.value = true;
}
</script>

<style lang="scss" scoped>
nav {
  z-index: 999;
  position: fixed;
  width: 50px;
  top: 20vh;
  right: 4px;

  // 当点击关闭按钮时
  &.when-close {
    display: none;
  }

  .show-qrcode {
    position: relative;

    .show {
      position: absolute;
      top: -36px;
      right: 66px;
      width: 333px;
      height: 150px;
      display: grid;
      grid-template-rows: 40px 110px;
      align-items: center;
      background-color: white;

      &::before {
        content: "";
        position: absolute;
        right: -11px;
        top: 50%;
        margin-top: -10px;
        display: inline-block;
        overflow: hidden;
        border-width: 10px;
        border-style: dashed dashed dashed solid;
        border-color: transparent transparent transparent rgb(230, 225, 225);
        border-right: none;
      }

      h3 {
        font-size: 15px;
        font-weight: 400;
        padding-left: 20px;
        color: rgb(59, 59, 59);
      }

      .frame {
        height: inherit;
        display: grid;
        grid-template-columns: 100px calc(100% - 100px);

        img {
          display: inline-block;
          height: 80px;
          width: 80px;
          margin: 20px;
          object-fit: cover;
        }

        .hint-message {
          display: inline-block;
          width: 190px;
          height: 80px;
          padding: 9px;
          margin-top: 20px;
          margin-left: 20px;
          margin-bottom: 30px;
          box-shadow: none;

          font-size: 13px;
          color: black;
          background: scroll no-repeat url("imgs/footer/other/10055.png");
          background-position: bottom right;
          object-fit: contain;
          background-size: 86%;
          filter: brightness(0.95);
          border: 1px solid hsla(0, 0%, 50%, 0.301);

          // 对话框拖尾效果
          &::after {
            content: "";
            position: absolute;
            left: -6px;
            top: 34px;
            width: 0;
            height: 0;
            overflow: hidden;
            border-width: 6px;
            border-style: dashed solid dashed dashed;
            border-color: transparent hsla(0, 1%, 70%, 0.486) transparent
              transparent;
            border-left: none;
          }
        }
      }
    }
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

<!-- 侧边栏二维码展开动画 -->
<style lang="scss" scoped>
@keyframes fluent-show {
  from {
    transform-origin: right center;
    filter: opacity(0);
    transform: scale(0);
  }
  to {
    transform-origin: right center;
    filter: opacity(1);
    transform: scale(1);
  }
}

.code-show-enter-active {
  animation: fluent-show 300ms ease-out forwards;
}

.code-show-leave-active {
  animation: fluent-show 120ms ease-in reverse forwards;
}
</style>
