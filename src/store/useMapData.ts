import { defineStore } from "pinia";
import { requestMapData } from "@/network/apis/apis";
import type {
  Children,
  ChinaAdd,
  ChinaTotal,
  RootObject,
  StatisGradeCityDetail,
} from "./receivedMapDataTypes";

type OptionMapDataProperties = Partial<RootObject>;
type OptionItem = Partial<Children>;
type CityDetail = Array<Partial<StatisGradeCityDetail>>;

/**
 * @description 获取地图数据
 */
export const useMapData = defineStore("mapData", {
  state: () => {
    return {
      list: <OptionMapDataProperties>{},
      item: <Array<OptionItem>>[],
      chinaAdd: <ChinaAdd>{},
      chinaTotal: <ChinaTotal>{},
      cityDetail: <CityDetail>{},
    };
  },

  getters: {
    simplifyMapData(state) {
      return state.list.data?.diseaseh5Shelf.areaTree[0].children;
    },
  },

  actions: {
    async initialList(): Promise<void> {
      const result = await requestMapData();
      this.list = result.data;
      this.chinaAdd = this.list.data?.diseaseh5Shelf.chinaAdd!;
      this.chinaTotal = this.list.data?.diseaseh5Shelf.chinaTotal!;
      this.cityDetail = this.list.data?.statisGradeCityDetail.slice(0, 10)!;
    },
  },
});
