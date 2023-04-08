<template>
  <div class="container">
    <p class="msg">您现在的位置: 客运首页 > {{ route.meta.title || "未知" }}</p>
    <div class="register">
      <div class="title">账户信息</div>
      <el-form
        style="margin: 10px 20px"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="账户名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Activity count" prop="count">
          <el-select-v2 v-model="ruleForm.count" placeholder="Activity count" :options="options" />
        </el-form-item>
        <el-form-item label="Activity time" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                label="Pick a date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.date2"
                label="Pick a time"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="Activity type" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox class="set-black" label="Online activities" name="type" />
            <el-checkbox class="set-black" label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="Sponsorship" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注信息" prop="desc">
          <el-input v-model="ruleForm.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> 创建 </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Register",
};
</script>

<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";
import { useRoute, type RouteLocationNormalizedLoaded } from "vue-router";

const route: RouteLocationNormalizedLoaded = useRoute();
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "Hello",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "请选择一个日期",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "请选择一个日期",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "请至少选择一个类型",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [{ required: true, message: "Please input activity form", trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 980px;
  display: grid;
  grid-template-columns: 1fr;
  .msg {
    width: 100%;
    margin: 5px auto;
    color: black;
    font-size: 13px;
  }

  // 这里样式没为了最求原版的所有效果
  .register {
    height: 600px;
    width: 980px;
    display: grid;
    border-radius: 6px;
    box-shadow: 0 6px 10px hsla(0, 0%, 0%, 0.466);
    grid-template-columns: 1fr;
    grid-template-rows: 34px calc(100% - 34px);

    overflow: hidden;
    .title {
      background: scroll no-repeat center
        linear-gradient(to bottom, hsl(202, 67%, 53%) 20%, hsl(204, 68%, 47%) 80%, hsl(202, 67%, 53%) 100%);

      border-bottom: 2px solid hsl(195, 74%, 65%);

      color: hsl(0, 0%, 96%);
      font-size: 15px;
      padding: 6px 17px;
    }
  }
}
</style>
