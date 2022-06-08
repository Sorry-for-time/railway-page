<template>
  <header>
    <div class="header-show">
      <!-- logo -->
      <img src="/imgs/logo.jpg" alt="图片貌似没加载出来???🙃" />

      <!-- 右侧区域 -->
      <div class="header-right">
        <!-- 搜素框 -->
        <div class="search-container">
          <input type="text" placeholder="搜索车票, 餐饮, 常旅客, 相关规则等" />
          <i class="fa fa-search"></i>
        </div>

        <!-- 帮助信息 -->
        <div class="help-items">
          <span class="item">爱心模式</span>
          <span class="item">English</span>
          <span class="item">我的12306</span>
          <span class="login-and-register">登录</span>
          <span class="login-and-register">注册</span>
        </div>
      </div>
    </div>

    <!-- 主要分类 -->
    <nav class="type">
      <span>首页</span>
      <span>车票</span>
      <span>团购服务</span>
      <span>会员服务</span>
      <span>站车服务</span>
      <span>商旅服务</span>
      <span>出行指南</span>
      <span>信息查询</span>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-rows: 80px 40px;
  justify-items: center;
  background-color: white;

  .header-show {
    width: calc(100% - 700px);
    display: grid;
    grid-template-columns: 200px calc(100% - 200px);
    align-items: center;

    .header-right {
      height: 100%;

      // 搜索框和按钮
      .search-container {
        height: 30px;

        input[type="text"] {
          height: 100%;
          width: 377px;
          margin-top: 28px;
          margin-left: 192px;
          border: 1px solid hsla(0, 0%, 50%, 0.473);
          padding-left: 5px;

          &::placeholder {
            color: rgba(128, 128, 128, 0.753);
          }
        }

        i {
          padding: 7px;
          background-color: hsl(211, 97%, 61%);
          text-align: center;
          font-weight: 200;
        }
      }

      // 帮助信息
      .help-items {
        float: right;
        width: 340px;

        .item {
          margin-left: 10px;
          padding-right: 10px;
          color: hsl(211, 97%, 61%);
          border-right: 2px solid hsla(211, 97%, 61%, 0.507);
          font-size: 13px;
        }

        .login-and-register {
          margin-left: 6px;
          padding-right: 6px;
          color: black;
          font-size: 12px;
        }
      }
    }
  }

  .type {
    background-color: hsl(211, 97%, 61%);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 144px);
    align-items: center;
    justify-content: center;

    > * {
      font-size: 14px;
      color: white;
      font-weight: 600;
    }
  }
}
</style>
