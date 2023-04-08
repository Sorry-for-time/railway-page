<template>
  <div class="announcement">
    <div class="category">
      <span
        v-for="(value, index) in itemTypes"
        :key="index"
        :class="{ 'when-active': index === currentSelect }"
        @click="currentSelect = index"
      >
        {{ value }}
      </span>
    </div>

    <div class="message-areas">
      <template v-if="announcement.length !== 0">
        <section v-for="(value, index) in announcement[0]!.data" :key="index">
          <span class="title">{{ value.title }}</span>
          <span class="time">{{ value.time }}</span>
        </section>
      </template>
    </div>

    <div class="hint">
      <span>更多&gt;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref, type Ref } from "vue";
import { requestAnnouncements } from "@/network/apis/apis";

const currentSelect: Ref<number> = ref(0);
const itemTypes: Array<string> = reactive(["最新发布", "常见问题", "信用信息"]);

type AnnouncementData = Partial<
  Array<{
    description: string;
    data: Array<{
      title: string;
      time: string;
    }>;
  }>
>;

const announcement: Ref<AnnouncementData> = ref([]);

onBeforeMount(async (): Promise<void> => {
  try {
    announcement.value = (await requestAnnouncements()).data;
  } catch (error) {
    console.warn("get data error");
  } finally {
    console.log(
      `%c${"=".repeat(12)} ALL DONE ${"=".repeat(12)}`,
      "background: purple; padding: 2px; border-radius: 3px",
    );
  }
});
</script>

<style lang="scss" scoped>
.announcement {
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  display: block;

  box-shadow: 0 0 1px rgba(0, 0, 0, 0.74);

  // 通知分类选项列表
  .category {
    width: 100%;
    height: 40px;

    display: flex;
    grid-template-columns: repeat(3, 1r);
    grid-template-rows: 1fr;
    justify-content: center;
    gap: 10px;

    // 选项
    span {
      flex: 1;
      box-shadow: 0 0 1px gray;
      text-align: center;
      line-height: 40px;
      color: hsl(0, 0%, 40%);
      font-size: 16px;
      font-weight: 500;
      background-color: hsl(240, 19%, 95%);
      transition: all ease-out 180ms;

      &:hover {
        background-color: hsla(211, 97%, 61%, 0.774);
        color: hsla(0, 0%, 100%, 0.63);
      }

      &.when-active {
        background-color: hsl(211, 97%, 61%);
        color: white;
      }
    }
  }

  .message-areas {
    height: 200px;
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 36px);
    // 先列后行的排列方式
    gap: 5px;
    grid-auto-flow: column;

    section {
      width: 100%;
      display: flex;

      .title {
        position: relative;
        flex: 4;
        color: hsl(0, 0%, 0%);
        margin-left: 15px;
        line-height: 36px;
        font-size: 14px;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;

        &::before {
          content: "";
          float: left;
          width: 6px;
          height: 6px;
          background: #3b99fc;
          margin: 15px 20px 0 0;
        }
      }

      .time {
        flex: 1;
        color: hsl(0, 0%, 60%);
        font-size: 13px;
        line-height: 36px;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .hint {
    height: 60px;
    width: 100%;

    span {
      float: right;
      margin: 10px 20px;
      text-align: right;
      color: hsl(0, 0%, 60%);
      font-size: 15px;
      font-weight: 500;
    }
  }
}
</style>
