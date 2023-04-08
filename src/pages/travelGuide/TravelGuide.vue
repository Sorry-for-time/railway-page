<template>
  <section class="box">
    <div class="box-left">
      <div class="top-show text-white">
        <section>
          <div>较上日+ {{ mapDataStore.chinaAdd.localConfirmH5 }}</div>
          <div>{{ mapDataStore.chinaTotal.localConfirm }}</div>
          <div>本土现有确诊</div>
        </section>

        <section>
          <div>较上日+ {{ mapDataStore.chinaAdd.nowConfirm }}</div>
          <div>{{ mapDataStore.chinaTotal.nowConfirm }}</div>
          <div>现有确诊</div>
        </section>

        <section>
          <div>较上日+ {{ mapDataStore.chinaAdd.confirm }}</div>
          <div>{{ mapDataStore.chinaTotal.confirm }}</div>
          <div>累计确诊</div>
        </section>

        <section>
          <div>较上日+ {{ mapDataStore.chinaAdd.noInfect }}</div>
          <div>{{ mapDataStore.chinaTotal.noInfect }}</div>
          <div>无症状感染者</div>
        </section>

        <section>
          <div>较上日+ {{ mapDataStore.chinaAdd.importedCase }}</div>
          <div>{{ mapDataStore.chinaTotal.importedCase }}</div>
          <div>境外输入</div>
        </section>

        <section>
          <div>较上日+ {{ mapDataStore.chinaAdd.dead }}</div>
          <div>{{ mapDataStore.chinaTotal.dead }}</div>
          <div>累计死亡</div>
        </section>
      </div>
      <div class="bottom-show" ref="pie"></div>
    </div>
    <div class="box-center" ref="boxCenter"></div>
    <div class="box-right">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>地区</th>
            <th>新增地区</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in mapDataStore.item" :key="nanoid(10)">
            <td>{{ item.name }}</td>
            <td>{{ item.today?.confirm }}</td>
            <td>{{ item.total?.confirm }}</td>
            <td>{{ item.total?.heal }}</td>
            <td>{{ item.total?.nowConfirm }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Ref, onActivated, onMounted, ref } from "vue";
import { useMapData } from "@/store/useMapData";
import * as echarts from "echarts";
import { EChartsType } from "echarts";
import { geoCoordMap } from "./geoSimplifyDetails";
import { nanoid } from "nanoid";
import "@/assets/region-data/testMapData";
import { debounce } from "lodash-es";

const boxCenter: Ref<HTMLDivElement | null> = ref<HTMLDivElement | null>(null);
const pie: Ref<HTMLDivElement | null> = ref<HTMLDivElement | null>(null);

const mapDataStore = useMapData();

function initEcharts(domElement: HTMLElement): EChartsType {
  return echarts.init(domElement);
}

let mapChart: EChartsType;
let pieChart: EChartsType;
onMounted(async (): Promise<void> => {
  mapChart = initEcharts(boxCenter.value!);
  pieChart = initEcharts(pie.value!);

  // 开启加载提示
  mapChart.showLoading();
  pieChart.showLoading();

  await mapDataStore.initialList();
  const cities = mapDataStore.simplifyMapData!;
  const data = cities?.map((element) => {
    return {
      name: element.name,
      value: geoCoordMap[element.name].concat(element.total.nowConfirm),
      children: Reflect.get(element, "children"),
    };
  });

  /**
   * @see https://www.isqqw.com/echartsdetail?id=15158
   */
  mapChart.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",
      itemStyle: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
      },

      emphasis: {
        areaColor: "#0f5d9d",
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "120%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin",
        symbolSize: [35, 35],
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        label: {
          show: true,
          color: "#fff",
          // 设置显示的数据
          formatter(value: any) {
            return value.data.value[2];
          },
        },
        itemStyle: {
          color: "#56b1da", //标志颜色
        },
        data: data,
      },
    ],
  });

  pieChart.setOption({
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 4,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
          },
        },
        labelLine: {
          show: true,
        },
        data: mapDataStore.cityDetail.map((element) => {
          return {
            name: element.city,
            value: element.nowConfirm,
          };
        }),
      },
    ],
  });

  // 结束图表的加载提示
  mapChart.hideLoading();
  pieChart.hideLoading();

  mapChart.on("click", (value: any): void => {
    mapDataStore.item = value.data.children;
  });

  mapDataStore.item = cities.filter((v) => v.name === "福建")[0].children;

  // 监听窗口的大小改变, 并且进行重绘
  window.visualViewport.addEventListener(
    "resize",
    debounce(() => {
      mapChart.resize();
    }, 80),
  );
});

onActivated(() => {
  // resize charts
  if (mapChart) {
    mapChart.resize();
  }
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 630px;
  display: grid;
  grid-template-columns: 400px calc(100% - 800px) 400px;
  grid-template-rows: 1fr;
  overflow: hidden;

  background: scroll center no-repeat url("/bgc.png");
  background-size: cover;

  &-left {
    backdrop-filter: blur(12px) brightness(1.4);

    .top-show {
      width: 96%;
      margin: 10px auto;
      height: 180px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      text-align: center;
      gap: 5px;

      section {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 1px solid hsla(0, 0%, 80%, 0.479);
        border-radius: 5px;
        font-size: 14px;
        background-color: hsla(180, 100%, 50%, 0.103);

        transition: 180ms ease-out;

        &:hover {
          transform: scale(1.01) translateY(-2px);
        }
      }
    }

    .bottom-show {
      margin-top: 50px;
      width: 100%;
      height: 350px;
    }
  }

  &-center {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 3px black;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: hsla(219, 56%, 63%, 0.116);
      backdrop-filter: blur(6px);
    }
  }

  &-right {
    backdrop-filter: blur(12px) brightness(1.4);
    color: white;

    table {
      width: 96%;
      margin: 10px auto;

      th,
      td {
        padding: 3px;
        text-align: center;
        border: 1px solid #ccc;
        background-color: hsla(0, 0%, 79%, 0.178);
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
}
</style>
