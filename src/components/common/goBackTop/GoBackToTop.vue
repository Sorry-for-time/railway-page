<template>
  <transition name="zoom">
    <div
      class="wrapper"
      @click="props.buttonClickFn()"
      ref="point"
      v-show="needShow"
    >
      <slot>
        <span>
          <i class="fa-solid fa-arrow-up"></i>
        </span>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { throttle } from "lodash";
import { onBeforeUnmount, onMounted, ref, Ref } from "vue";

const props = defineProps({
  /**
   * @description 容器的默认宽度
   */
  width: {
    type: String,
    default: "45px",
  },

  /**
   * @description 容器的默认高度
   */
  height: {
    type: String,
    default: "45px",
  },

  /**
   * @description 容器离右侧的距离
   */
  right: {
    type: String,
    default: "20px",
  },

  /**
   * @description 容器离底部的距离
   */
  bottom: {
    type: String,
    default: "80px",
  },

  /**
   * @description 是否在鼠标滚轮滚回页面顶部的时候隐藏容器, 与 {triggerHeight} 配置互斥
   */
  hideWhenWheelBack: {
    type: Boolean,
    default: false,
  },

  /**
   * @description 容器距达到指定页面位置才显示的高度, 与 {hideWhenWheelBack} 配置互斥
   */
  triggerHeight: {
    type: Number,
    default: 500,
  },

  /**
   * @description 所有绑定回调默认的节流触发阈值
   */
  throttleWaitTime: {
    type: Number,
    default: 400,
  },

  /**
   * @description 点击容器时触发的回调, 默认为上滚
   */
  buttonClickFn: {
    type: Function,
    default: (): void => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  /**
   * @description z-index 权重
   */
  displayWeight: {
    type: Number,
    default: 999,
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
}, props.throttleWaitTime);

/**
 * @description 根据 prop 传递参数决定是否启用滚轮上下滚动来显示隐藏返回按钮, 与 decideShowByPropHeight 互斥(二选一)
 */
const decideShowByIsUseScrollTop = throttle((): void => {
  const compare: number = document.documentElement.scrollTop;
  if (compare > props.triggerHeight && needShow.value !== true) {
    needShow.value = true;
  }
  if (compare < props.triggerHeight && needShow.value !== false) {
    needShow.value = false;
  }
}, props.throttleWaitTime);

onMounted(async (): Promise<void> => {
  if (props.hideWhenWheelBack) {
    document.addEventListener("scroll", decideShowByPropHeight);
  } else {
    // 初始化
    const initialHeight: number = document.documentElement.scrollTop;
    initialHeight > props.triggerHeight
      ? (needShow.value = true)
      : (needShow.value = false);
    document.addEventListener("scroll", decideShowByIsUseScrollTop);
  }
});

onBeforeUnmount((): void => {
  document.removeEventListener("scroll", decideShowByPropHeight);
  document.removeEventListener("scroll", decideShowByIsUseScrollTop);
});
</script>

<!-- default css animation preset, maybe move to a universal style file in future-->
<style lang="scss" scoped>
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
  z-index: v-bind(displayWeight);
  position: fixed;
  width: v-bind(width);
  height: v-bind(height);
  right: v-bind(right);
  bottom: v-bind(bottom);

  display: flex;
  align-items: center;
  justify-items: center;

  border-radius: 8px;
  box-shadow: 0 0 3px hsla(0, 0%, 0%, 0.288),
    0 0 3px hsla(0, 0%, 0%, 0.521) inset;
  background-color: hsla(40, 1%, 47%, 0.377);
  backdrop-filter: blur(12px);

  * {
    flex: 100%;
    text-align: center;
    text-shadow: 0 0 2px black;
  }
}
</style>
