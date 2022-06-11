<template>
  <div class="wait-develop">
    <h1>正在开发中, 敬请期待...</h1>
  </div>
</template>

<script setup lang="ts">
import { ColorfulBackground } from "@/hooks/colorfulBackground";
import { Ref } from "vue";
const currentSelectColorUnits: Ref<string> = ColorfulBackground();
</script>

<style lang="scss" scoped>
.wait-develop {
  width: 100%;
  height: 630px;
  background: scroll center no-repeat
    linear-gradient(v-bind(currentSelectColorUnits));
  background-size: cover;
  object-fit: cover;
  display: grid;

  h1 {
    color: rgb(241, 252, 252);
    text-shadow: 1px 1px 2px black;
    margin-top: 20vh;
    text-align: center;
    font-size: 5rem;
    font-weight: 500;
  }
}
</style>
