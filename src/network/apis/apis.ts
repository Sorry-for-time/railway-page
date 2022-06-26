import { AxiosResponse } from "axios";
import { mockApi } from "../mockInit";

export async function requestRailwayLinesData(): Promise<
  AxiosResponse<any, any>
> {
  return mockApi.get("/railway-lines");
}
