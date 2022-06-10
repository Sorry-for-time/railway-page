<template>
  <div class="tool-frame">
    <!-- 导航栏 -->
    <nav class="left-bar">
      <div class="item">
        <div class="full when-active">
          <span class="fa fa-train">&nbsp;车票</span>
        </div>
      </div>

      <div class="item">
        <div class="full">
          <span class="fa fa-train">&nbsp;常用查询</span>
        </div>
      </div>

      <div class="item">
        <div class="full">
          <span class="fa fa-train">&nbsp;订餐</span>
        </div>
      </div>
    </nav>

    <!-- 展示的路由页面 -->
    <div class="right-show-page">
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        unlink-panels
        :size="'small'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref("");
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
    .el-date-table-cell__text {
      color: black !important;
    }
  }
}
</style>
