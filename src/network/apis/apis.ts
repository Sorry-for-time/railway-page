import { AxiosResponse } from "axios";
import { mockApi } from "../mockInit";
import { apiManager } from "@/network/network";

/**
 * @description 取得线路信息
 */
export async function requestRailwayLinesData(): Promise<
  AxiosResponse<any, any>
> {
  return mockApi.get("/railway-lines");
}

/**
 * @description 取得通知信息
 */
export async function requestAnnouncements(): Promise<AxiosResponse<any, any>> {
  return mockApi.get(`/announcements`);
}

/**
 * @brief 测试/学习接口, 切勿商用或者滥用
 * @description 获取疫情分布相关的数据
 */
export async function requestMapData(): Promise<AxiosResponse<any, any>> {
  return await apiManager.post(
    "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf"
  );
}
