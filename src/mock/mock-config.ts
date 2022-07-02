import MockJs from "mockjs";

import RailwayLines from "./railway-lines.json";
import Announcements from "./announcement.json";

// 模拟线路信息
MockJs.mock("/mock/railway-lines", {
  code: 200,
  data: RailwayLines,
});

// 模拟公告信息
MockJs.mock(`/mock/announcements`, {
  code: 200,
  data: Announcements,
});
