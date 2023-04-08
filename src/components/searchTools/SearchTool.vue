<template>
  <div class="tool-frame">
    <!-- 导航栏 -->
    <nav class="left-bar">
      <div class="item" @click="changeSelectItem('ticket')">
        <div class="full" :class="{ 'when-active': currentShow === 'ticket' }">
          <span class="fa fa-train">&nbsp;车票</span>
        </div>
      </div>

      <div class="item" @click="changeSelectItem('search')">
        <div class="full" :class="{ 'when-active': currentShow === 'search' }">
          <span class="fa fa-file-text">&nbsp;常用查询</span>
        </div>
      </div>

      <div class="item" @click="changeSelectItem('book')">
        <div class="full" :class="{ 'when-active': currentShow === 'book' }">
          <span class="fa fa-coffee">&nbsp;订餐</span>
        </div>
      </div>
    </nav>

    <!-- 展示的路由页面 -->
    <div class="right-show-page">
      <el-calendar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentShow = ref("ticket");
function changeSelectItem(str: string): void {
  currentShow.value = str;
}
</script>

<style lang="scss" scoped>
.tool-frame {
  width: 515px;
  height: 352px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 100px 415px;
  background-color: white;

  .left-bar {
    display: flex;
    flex-direction: column;
    background-color: hsl(211, 97%, 61%);

    .item {
      flex: 1;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.425);

      // 当元素被选中时的样式
      &:nth-last-child(1) {
        border-bottom: none;
      }

      .full {
        width: 100%;
        margin-left: 3px;
        height: 100%;
        transition: all ease-out 200ms;

        // 鼠标悬浮时的效果提示
        &:hover {
          background-color: hsla(0, 0%, 100%, 0.555);

          span {
            color: hsl(211, 97%, 61%);
          }
        }

        // 当被激活时候的样式
        &.when-active {
          background-color: hsl(0, 0%, 100%);

          span {
            color: hsl(211, 97%, 61%);
          }
        }

        span {
          width: 100%;
          color: black;
          line-height: 117px;
          margin-left: 8px;
          font-size: 16px;
          font-weight: 500;
          color: white;
          cursor: pointer;
        }
      }
    }
  }

  .right-show-page {
    height: 100%;
    display: flex;

    ::v-deep(.el-calendar) {
      height: 100%;

      .el-calendar-day {
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
