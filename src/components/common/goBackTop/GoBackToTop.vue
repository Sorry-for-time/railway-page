<template>
  <div class="wrapper" ref="point">
    <slot>
      <span>
        <i class="fa fa-arrow-up"></i>
      </span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";

defineProps({
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
});

const point: Ref<null | HTMLElement> = ref<HTMLElement | null>(null);

onMounted(async (): Promise<void> => {
  const child: HTMLElement = point.value?.firstElementChild as HTMLElement;
  console.log(child);
  child.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 233;
  position: fixed;
  width: v-bind(width);
  height: v-bind(height);
  right: v-bind(right);
  bottom: v-bind(bottom);
  display: flex;
  align-items: center;
  background: orange;

  * {
    flex: 100%;
    text-align: center;
  }
}
</style>
