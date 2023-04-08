import { defineComponent, ref, Ref } from "vue";

export const Carousel = defineComponent({
  setup() {
    const imgList: Ref<Array<string>> = ref([
      "/imgs/banner/banner10.jpg",
      "/imgs/banner/banner12.jpg",
      "/imgs/banner/banner26.jpg",
    ]);

    return {
      imgList,
    };
  },

  render() {
    return (
      <el-carousel trigger="click" height="490px">
        {this.imgList.forEach((element): void => {
          <el-carousel-item>
            <el-image loading="lazy" src={element} alt="图片貌似没有加载出来" />
          </el-carousel-item>;
        })}
      </el-carousel>
    );
  },
});

export default Carousel;
