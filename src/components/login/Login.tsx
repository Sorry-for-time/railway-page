import { defineComponent, ref } from "vue";

export const Login = defineComponent({
  setup() {
    const counter = ref(0);

    // 返回渲染函数
    // jsx 语法下使用 {}, 且不能在使用 sfc 下的自动拆箱取值
    return () => (
      <section style="background-color: blue; width: 100%; height: 600px">

      </section>
    );
  },
});
