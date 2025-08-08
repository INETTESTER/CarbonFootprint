import http from "k6/http";
import { token } from "./token.js";

export function หน้าสร้างองค์กร() {
  const url = "https://carbonfootprint.one.th/api/v2/industrials/8d1969b9-097e-4c82-8e7e-7d9ce52f3956";

  const headers = {
    "Cookie": "accessToken="+token,
  };

  const res = http.get(url, { headers });

  //console.log(res.body);
  return res;
}
