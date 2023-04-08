import { Login } from "@/components/login/Login";
import type { RouteRecordRaw } from "vue-router";

const Register = () => import("@/components/register/Register.vue");
const Home = () => import("@/pages/home/Home.vue");
const BusinessService = () => import("@/pages/business/BusinessService.vue");
const TravelGuide = () => import("@/pages/travelGuide/TravelGuide.vue");
// 辅助页面
const WaitDevelop = () => import("@/pages/waitDevelop/WaitDevelop.vue");
const NotFoundPage = () => import("@/pages/error/NotFoundPage.vue");

export const routes: Array<RouteRecordRaw> = [
  // 首页重定向
  {
    path: "",
    redirect: { name: "home" },
  },

  // 主页
  {
    name: "home",
    path: "/home",
    component: Home,
    meta: {
      title: "中国铁路12306",
      needAuth: false,
    },
  },

  // 登录
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
      needAuth: false,
    },
  },

  // 注册
  {
    name: "register",
    path: "/register",
    component: Register,
    meta: {
      title: "注册",
      needAuth: false,
    },
  },

  // 车票
  {
    name: "ticket",
    path: "/ticket",
    component: WaitDevelop,
    meta: {
      title: "车票",
      needAuth: false,
    },
  },

  // 团购服务
  {
    name: "groupService",
    path: "/group-service",
    component: WaitDevelop,
    meta: {
      title: "团购服务",
      needAuth: false,
    },
  },

  // 会员服务
  {
    name: "vipService",
    path: "/vip-service",
    component: WaitDevelop,
    meta: {
      title: "会员服务",
      needAuth: false,
    },
  },

  // 车票
  {
    name: "station-car-service",
    path: "/station-car-service",
    component: WaitDevelop,
    meta: {
      title: "站车服务",
      needAuth: false,
    },
  },

  // 商务服务
  {
    name: "businessService",
    path: "/business-service",
    component: BusinessService,
    meta: {
      title: "商务服务",
      needAuth: false,
    },
  },

  // 出行指南
  {
    name: "travelGuide",
    path: "/travel-guide",
    component: TravelGuide,
    meta: {
      title: "出行指南",
      needAuth: false,
    },
  },

  // 信息查询
  {
    name: "detailSearch",
    path: "/detail-search",
    component: WaitDevelop,
    meta: {
      title: "信息查询",
      needAuth: false,
    },
  },

  // 错误页
  {
    name: "notFound",
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    meta: {
      title: "404 Not Found",
      needAuth: false,
    },
  },
];
