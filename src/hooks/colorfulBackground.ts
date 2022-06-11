import { onMounted, reactive, Ref, ref } from "vue";

// 背景色定义
interface ColorUnits {
  deg: string;
  linerColorStart: string;
  optionColor?: string;
  linerColorEnd: string;
}

export function ColorfulBackground(): Ref<string> {
  // 背景渐变颜色组合
  const bgcColors: Array<ColorUnits> = reactive([
    {
      deg: "102.4deg",
      linerColorStart: "rgba(253,189,85,1) 7.8%",
      linerColorEnd: "rgba(249,131,255,1) 100.3%",
    },
    {
      deg: "68.4deg",
      linerColorStart: "rgba(99,251,215,1) -0.4%",
      linerColorEnd: "rgba(5,222,250,1) 100.2%",
    },
    {
      deg: "179.4deg",
      linerColorStart: "rgba(132,56,122,1) 14.6%",
      linerColorEnd: "rgba(190,24,49,1) 104.7%",
    },
    {
      deg: "109.6deg",
      linerColorStart: "rgba(61,245,167,1) 11.2%",
      linerColorEnd: "rgba(9,111,224,1) 91.1%",
    },
    {
      deg: "180.deg",
      linerColorStart: "rgba(188,120,236,1) -2.2%",
      linerColorEnd: "rgba(29,133,163,1) 83.5%",
    },
  ]);

  function getRandomValue(): number {
    return Math.floor(Math.random() * (bgcColors.length - 1));
  }

  const currentSelectColorUnits: Ref<string> = ref("");
  onMounted(() => {
    const currentIndex = getRandomValue();
    currentSelectColorUnits.value = `${bgcColors[currentIndex].deg}, ${bgcColors[currentIndex].linerColorStart}, ${bgcColors[currentIndex].linerColorEnd}`;
  });

  return currentSelectColorUnits;
}
