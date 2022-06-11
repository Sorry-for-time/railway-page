<template>
  <header>
    <div class="header-show">
      <!-- logo -->
      <img src="/imgs/logo.jpg" alt="图片貌似没加载出来???🙃" />

      <!-- 右侧区域 -->
      <div class="header-right">
        <!-- 搜素框 -->
        <div class="search-container">
          <!-- 直接按需回车也会触发搜索事件 -->
          <input
            type="text"
            placeholder="搜索车票, 餐饮, 常旅客, 相关规章"
            v-model.trim="searchValue"
            @keydown.enter="goSearch"
          />
          <button @click="goSearch">
            <i class="fa fa-search"></i>
          </button>
        </div>

        <!-- 帮助信息 -->
        <div class="help-message">
          <nav>
            <span>爱心模式</span>
            <span>English</span>
            <span>我的 12306</span>
          </nav>

          <!-- 登录和注册 -->
          <div class="fn-area">
            <span>登录</span>
            <span>注册</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要分类 -->
    <nav class="type">
      <span
        v-for="(value, index) in majorCategory"
        :key="index"
        :class="{ 'when-active': index === currentActive }"
        @click="
          goPath(value);
          changeCurrentActive(index);
        "
      >
        {{ value }}
      </span>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const searchValue = ref("");
const currentActive = ref(0);

function changeCurrentActive(index: number): void {
  currentActive.value = index;
}

/**
 * @description 根据已经输入内容进行搜索
 */
function goSearch() {
  // 在此写你的业务逻辑(网络请求等)
  console.log(searchValue.value);
}

/**
 * @description 主要分类关键词
 */
const majorCategory: Array<string> = reactive([
  "首页",
  "车票",
  "团购服务",
  "会员服务",
  "站车服务",
  "商旅服务",
  "出行指南",
  "信息查询",
]);

const router = useRouter();

/**
 * @description 跳转到指定的页面
 */
function goPath(targetName: string): void {
  let path: string = "/";
  switch (targetName) {
    case "首页":
      path = "/home";
      break;
    case "车票":
      path = "/ticket";
      break;
    case "团购服务":
      path = "/group-service";
      break;
    case "会员服务":
      path = "/vip-service";
      break;
    case "站车服务":
      path = "/station-car-service";
      break;
    case "商旅服务":
      path = "/business-service";
      break;
    case "出行指南":
      path = "/travel-guide";
      break;
    case "信息查询":
      path = "/detail-search";
      break;
    default:
      break;
  }
  router.push(path);
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-rows: 80px 40px;
  justify-items: center;
  background-color: white;
  overflow: hidden;

  .header-show {
    width: calc(100% - 700px);
    display: grid;
    grid-template-columns: 200px calc(100% - 200px);
    align-items: center;

    .header-right {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;

      // 搜索框和按钮
      .search-container {
        height: 30px;
        margin-left: 40px;
        width: 100%;

        input[type="text"] {
          margin-left: 20px;
          padding-left: 8px;
          color: black;
          border: none;
          outline: none;
          width: 350px;
          height: 28px;
          box-shadow: 0 0 2px gray;

          &::placeholder {
            font-size: 13px;
            color: gray;
            font-weight: 500;
          }
        }

        button {
          height: 30px;
          width: 30px;
          border: none;
          outline: none;
          background-color: hsl(211, 97%, 61%);
          box-shadow: 0 0 2px gray;

          &:hover {
            cursor: pointer;
          }
        }
      }

      // 帮助信息
      .help-message {
        nav {
          display: inline-block;
          span {
            color: hsl(211, 97%, 61%);
            font-size: 13px;
            padding-right: 10px;
            border-right: 2px solid hsla(211, 97%, 71%, 0.747);
            margin-left: 10px;
          }
        }
        .fn-area {
          display: inline-block;
          span {
            margin-left: 10px;
            color: rgba(0, 0, 0, 0.664);
            font-size: 13px;
          }
        }
      }
    }
  }

  // 导航栏分类
  .type {
    background-color: hsl(211, 97%, 61%);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 144px);
    align-items: center;
    justify-content: center;

    span {
      height: 100%;
      font-size: 14px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      line-height: 40px;
      text-align: center;
      transition: 200ms ease-out;

      &:hover {
        text-decoration: underline;
        background-color: hsl(214, 83%, 57%);
      }

      &.when-active {
        background-color: hsl(215, 77%, 52%);
      }
    }
  }
}
</style>
