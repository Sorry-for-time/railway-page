<template>
  <header v-show="needShow">
    <div class="header-show">
      <!-- logo -->
      <img class="logo" src="/imgs/logo.jpg" alt="图片貌似没加载出来???🙃" />

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
          <button
            class="fa-solid fa-magnifying-glass"
            @click="goSearch"
          ></button>
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
            <span @click="goLogin">登录</span>
            <span @click="goRegister">注册</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要分类 -->
    <nav class="type">
      <span
        v-for="(value, index) in majorCategory"
        :key="index"
        :class="{ 'when-active': value.name.includes(route.path) }"
        @click="
          goPath(value.title);
          currentItem = value.name;
        "
      >
        {{ value.title }}
      </span>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
import { useRoute, useRouter, Router } from "vue-router";

const route = useRoute();
const currentItem = ref("");
const needShow = ref(true);

watchEffect((): void => {
  currentItem.value = route.path;
  needShow.value = route.path !== "/login";
});

const searchValue = ref("");

/**
 * @description 根据已经输入内容进行搜索
 */
function goSearch(): void {
  // 在此写你的业务逻辑(网络请求等)
  console.log(searchValue.value);
}

/**
 * @description 主要分类关键词
 */
const majorCategory: Array<{ name: string; title: string }> = reactive([
  {
    name: "/home",
    title: "首页",
  },
  {
    name: "/ticket",
    title: "车票",
  },
  {
    name: "/group-service",
    title: "团购服务",
  },
  {
    name: "/vip-service",
    title: "会员服务",
  },
  {
    name: "/station-car-service",
    title: "站车服务",
  },
  {
    name: "/business-service",
    title: "商旅服务",
  },
  {
    name: "/travel-guide",
    title: "出行指南",
  },
  {
    name: "/detail-search",
    title: "信息查询",
  },
]);

const router: Router = useRouter();

/**
 * @description 跳转到指定的页面
 */
function goPath(targetPathMapName: string): void {
  let path: string = "/";
  switch (targetPathMapName) {
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

/**
 * @description 跳转到登录页面
 */
function goLogin(): void {
  router.push("/login");
}

function goRegister(): void {
  router.push("/register");
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-rows: 80px 40px;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: white;
  overflow: hidden;

  @media screen and (max-width: 1300px) {
    height: 160px;
    grid-template-rows: 120px 40px;

    .header-show {
      width: 98%;
    }
  }

  @media screen and (max-width: 1185px) {
    height: 120px;
    grid-template-rows: 80px 40px;

    .header-show {
      .header-right {
        grid-template-columns: 1fr !important;

        .search-container {
          width: 100%;
        }
        .help-message {
          display: none;
        }
      }
    }
  }

  .header-show {
    width: 60%;
    display: grid;
    grid-template-columns: 200px calc(100% - 200px);
    align-items: center;
    justify-content: center;
    justify-items: center;

    .header-right {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      justify-items: center;
      align-items: center;

      // 搜索框和按钮
      .search-container {
        text-align: right;
        margin-left: 40px;
        height: 30px;
        width: 100%;

        input[type="text"] {
          margin-left: 20px;
          padding-left: 8px;
          color: black;
          border: none;
          outline: none;
          width: calc(100% - 50px);
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
        margin-left: 20px;

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
