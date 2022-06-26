import MockJs from "mockjs";

import RailwayLines from "./railway-lines.json";

MockJs.mock("/mock/railway-lines", {
  code: 200,
  data: RailwayLines,
});
