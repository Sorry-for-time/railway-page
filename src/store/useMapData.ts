import { defineStore } from "pinia";
import { requestMapData } from "@/network/apis/apis";
import type { RootObject } from "./receivedMapDataTypes";

type OptionMapDataProperties = Partial<RootObject>;

/**
 * @description 获取地图数据
 */
export const useMapData = defineStore("mapData", {
  state: () => {
    return {
      list: <OptionMapDataProperties>{},
    };
  },

  getters: {
    simplifyMapData(state) {
      return state.list.data?.diseaseh5Shelf.areaTree[0].children;
    },
  },

  actions: {
    async initialList(): Promise<void> {
      const result = (await requestMapData()).data;
      console.log(result);
      this.list = result;
    },
  },
});
