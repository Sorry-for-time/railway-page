import { AxiosResponse } from "axios";
import { mockApi } from "../mockInit";

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
