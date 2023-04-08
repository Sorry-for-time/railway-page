import { defineComponent } from "vue";
import { ElCard } from "element-plus";

export const Login = defineComponent({
  name: "Login",
  setup() {
    return {};
  },
  render() {
    return (
      <div
        style={{ height: "300px", width: "100%", backdropFilter: "blur(12px)" }}
      ></div>
    );
  },
});
