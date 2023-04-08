import * as VueRouter from "vue-router";
import { routes } from "./config/routes";
import Nprogress from "nprogress";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    needAuth?: boolean;
  }
}

Nprogress.configure({ easing: "ease", speed: 500 });

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  // 滚动行为
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition
      ? {
          behavior: "smooth",
          savedPosition,
        }
      : {
          behavior: "smooth",
          top: 0,
        };
  },
});

// 全局前置路由守卫配置
router.beforeEach((to, from, next) => {
  Nprogress.start();
  // write your assignment code here...

  next();
});

// 全局后置路由守卫配置
router.afterEach((to, from) => {
  if (to.meta.title) {
    //如果路由原信息配置了页面标题名称, 就重写页面标题
    document.title = to.meta.title;
  }
  Nprogress.done();
});

export { router };
