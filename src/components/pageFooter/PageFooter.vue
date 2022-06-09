<template>
  <footer class="page-footer">
    <div class="top">
      <!-- 友链 -->
      <div class="friend-link">
        <span>友情链接</span>
        <div class="friends-logo">
          <img
            v-for="(value, index) in friendLinkImgUrls"
            :key="index"
            :src="value"
            alt="图片貌似没有加载出???🐌"
          />
        </div>
      </div>

      <!-- 二维码区域 -->
      <div class="qr-code-area">
        <div
          class="qr-code-item"
          v-for="(item, index) in qrCodeImgUrls"
          :key="index"
        >
          <span class="title">{{ item.title }}</span>
          <img :src="item.imgUrl" alt="图片貌似没加载出来???🥲" />
        </div>
      </div>

      <!-- 提示信息 -->
      <div class="hint-message">
        官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。
      </div>
    </div>

    <!-- 版权信息 -->
    <div class="bottom">
      <section>
        <p>
          版权所有©2008-2022&nbsp;&nbsp;
          中国铁道科学研究院集团有限公司&nbsp;&nbsp; 技术支持：铁旅科技有限公司
        </p>

        <p>
          <img
            src="imgs/footer/other/10018.png"
            alt="loading..."
            style="height: 15px"
          />
          京公网安备&nbsp; 11010802038392号 &nbsp;|&nbsp; 京ICP备05020493号-4 |
          &nbsp;&nbsp;ICP证：&nbsp; &nbsp;京B2-20202537
        </p>
      </section>
      <img src="/imgs/footer/other/footer-slh.jpg" alt="" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const friendLinkImgUrls: Array<string> = reactive([
  "imgs/footer/friend-link/link02.png",
  "imgs/footer/friend-link/link03.png",
  "imgs/footer/friend-link/link04.png",
  "imgs/footer/friend-link/link05.png",
]);

/**
 * @description 二维码图片链接
 */
const qrCodeImgUrls: Array<{
  title: string;
  imgUrl: string;
}> = reactive([
  {
    title: "中国铁路官方微信",
    imgUrl: "imgs/footer/qr-codes/10015.png",
  },
  {
    title: "中国铁路官方微博",
    imgUrl: "imgs/footer/qr-codes/10016.png",
  },
  {
    title: "12306 公众号",
    imgUrl: "imgs/footer/qr-codes/10016.png",
  },
  {
    title: "铁路 12306",
    imgUrl: "imgs/footer/qr-codes/10018.png",
  },
]);
</script>

<style lang="scss" scoped>
.page-footer {
  width: 100%;
  height: 274px;
  margin-top: 50px;
  background-color: hsl(0, 0%, 97%);

  .top {
    width: 1134px;
    height: 194px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 420px calc(100% - 610px) 190px;

    // 友链
    .friend-link {
      display: grid;
      grid-template-rows: 54px calc(100% - 54px);
      align-items: center;

      // 提示
      span {
        margin-top: 40px;
        color: black;
        font-size: 13px;
        font-weight: 500;
      }

      // 友链图标区域
      .friends-logo {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        align-items: center;
        gap: 10px;

        img {
          height: 34px;
          width: 100%;
          object-fit: cover;
          border: solid 1px hsla(0, 0%, 40%, 0.212);
        }
      }
    }

    // 二维码区域
    .qr-code-area {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      gap: 10px;

      .qr-code-item {
        .title {
          display: block;
          margin-top: 40px;
          width: 100%;
          font-size: 14px;
          color: black;
          text-align: center;
        }

        img {
          display: block;
          height: 80px;
          width: 80px;
          margin: 25px auto;
          margin-bottom: 20px;
          object-fit: cover;
          border: solid 1px hsla(0, 0%, 40%, 0.212);
          font-weight: 500;
        }
      }
    }
    .hint-message {
      position: relative;
      margin-top: 83px;
      margin-left: 10px;
      width: 190px;
      height: 80px;
      padding: 9px;
      font-size: 13px;
      color: black;
      background-color: white;
      border: 1px solid hsla(0, 0%, 50%, 0.39);

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
        border-color: transparent hsla(0, 0%, 73%, 0.541) transparent
          transparent;
        border-left: none;
      }
    }
  }

  .bottom {
    width: 100%;
    height: calc(100% - 194px);
    background-color: hsl(0, 0%, 40%);
    display: grid;
    grid-template-columns: 570px 160px;
    gap: 20px;
    justify-items: center;
    justify-content: center;
    align-items: center;

    section {
      height: 100%;
      display: grid;
      align-items: center;

      p {
        flex: 100%;
        text-align: center;
        width: 100%;
        font-size: 13px;
        color: hsl(0, 0%, 76%);
        font-weight: 500;

        &:first-child {
          margin-top: 10px;
        }

        &:last-child {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
