<template>
  <div class="common-loading-hint">{{ receive.msg }}</div>
</template>

<script setup lang="ts">
const receive = defineProps({
  msg: {
    type: String,
    default: "loading... 🔭",
  },
});
</script>

<style lang="scss" scoped>
@import "@scss/util/options.scss";
.common-loading-hint {
  text-align: center;
  @include text-clip-fn(80deg, rgb(116, 215, 240), rgb(87, 0, 75));
  font-weight: 800;
  font-size: 20px;
}
</style>
