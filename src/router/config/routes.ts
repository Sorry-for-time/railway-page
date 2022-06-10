import { RouteRecordRaw } from "vue-router";

const Home = () => import("@/pages/home/Home.vue");
const NotFoundPage = () => import("@/pages/error/NotFoundPage.vue");

export const routes: RouteRecordRaw[] = [
  // 首页重定向
  {
    path: "",
    redirect: { name: "home" },
  },

  {
    name: "home",
    path: "/home",
    component: Home,
    meta: {
      title: "中国铁路12306",
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
