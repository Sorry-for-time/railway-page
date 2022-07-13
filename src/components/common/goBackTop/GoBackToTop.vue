<template>
  <transition name="zoom">
    <div class="wrapper" ref="point" v-show="needShow">
      <slot>
        <span>
          <i class="fa fa-arrow-up"></i>
        </span>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { throttle } from "lodash";
import { onBeforeUnmount, onMounted, ref, Ref } from "vue";
const props = defineProps({
  width: {
    type: String,
    default: "40px",
  },
  height: {
    type: String,
    default: "40px",
  },
  right: {
    type: String,
    default: "12px",
  },
  bottom: {
    type: String,
    default: "20px",
  },
  hideWhenScrollTop: {
    type: Boolean,
    default: false,
  },
  needShowHeight: {
    type: Number,
    default: 500,
  },
  waitTime: {
    type: Number,
    default: 400,
  },
});

let prevScrollPos: number = 0; // 当前滚动停留位置
const needShow: Ref<boolean> = ref<boolean>(false);
const point: Ref<null | HTMLElement> = ref<HTMLElement | null>(null);

/**
 * @description 根据 prop 传递参数决定是否通过设定高度来显示隐藏返回按钮, 与 decideShowByIsUseScrollTop 互斥(二选一)
 */
const decideShowByPropHeight = throttle((): void => {
  const compare: number = document.documentElement.scrollTop;
  if (compare > prevScrollPos && needShow.value !== true) {
    needShow.value = true;
  }
  if (compare < prevScrollPos && needShow.value !== false) {
    needShow.value = false;
  }
  prevScrollPos = compare;
}, props.waitTime);

/**
 * @description 根据 prop 传递参数决定是否启用滚轮上下滚动来显示隐藏返回按钮, 与 decideShowByPropHeight 互斥(二选一)
 */
const decideShowByIsUseScrollTop = throttle((): void => {
  const compare: number = document.documentElement.scrollTop;
  if (compare > props.needShowHeight && needShow.value !== true) {
    needShow.value = true;
  }
  if (compare < props.needShowHeight && needShow.value !== false) {
    needShow.value = false;
  }
}, props.waitTime);

/**
 * @description 点击按钮平滑滚动(取决于浏览器支持)回顶部
 */
const buttonClickFn = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(async (): Promise<void> => {
  const child: HTMLElement = point.value?.firstElementChild as HTMLElement; // 取得子元素
  if (props.hideWhenScrollTop) {
    document.addEventListener("scroll", decideShowByPropHeight);
  } else {
    // 初始化
    const initialHeight: number = document.documentElement.scrollTop;
    initialHeight > props.needShowHeight
      ? (needShow.value = true)
      : (needShow.value = false);
    document.addEventListener("scroll", decideShowByIsUseScrollTop);
  }

  child.addEventListener("click", buttonClickFn);
});

onBeforeUnmount((): void => {
  document.removeEventListener("scroll", decideShowByPropHeight);
  document.removeEventListener("scroll", decideShowByIsUseScrollTop);
  window.removeEventListener("click", buttonClickFn);
});
</script>

<style lang="scss" scoped>
// 路由组件离场动画
@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0.6) translateX(100px);
  }
  90% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}
.zoom-enter-active {
  animation: zoom 400ms ease-out forwards;
}
.zoom-leave-active {
  animation: zoom 380ms ease-in reverse forwards;
}
</style>

<style lang="scss" scoped>
.wrapper {
  z-index: 233;
  position: fixed;
  width: v-bind(width);
  height: v-bind(height);
  right: v-bind(right);
  bottom: v-bind(bottom);

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-items: center;

  border-radius: 6px;
  box-shadow: 0 0 4px black;
  background-color: orange;

  * {
    flex: 100%;
    text-align: center;
  }
}
</style>
