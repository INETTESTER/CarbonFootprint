//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';

import { หน้าสร้างองค์กร } from '../api/หน้าสร้างองค์กร.js';
import { ระยะเวลาเก็บข้อมูล } from '../api/ระยะเวลาเก็บข้อมูล.js';
import { ระยะการเก็บข้อมูลปีฐาน } from '../api/ระยะการเก็บข้อมูลปีฐาน.js';
import { ปีฐาน } from '../api/ปีฐาน.js';
import { การปล่อยก๊าซเรือนกระจก } from '../api/การปล่อยก๊าซเรือนกระจก.js';
import { ระบบสมาชิกทั้งหมด } from '../api/ระบบสมาชิกทั้งหมด.js';
import { รายงานทั้งหมด } from '../api/รายงานทั้งหมด.js';
import { แยกรายงาน } from '../api/แยกรายงาน.js';
import { emissionทั้งหมด } from '../api/emissionทั้งหมด.js';
import { scope1 } from '../api/scope1.js';
import { scope2 } from '../api/scope2.js';
import { scope3 } from '../api/scope3.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //==================== หน้าองค์กรทั้งหมด =========================//
  response = หน้าสร้างองค์กร()
  //response = ระยะเวลาเก็บข้อมูล()
  //response = ระยะการเก็บข้อมูลปีฐาน()
  //response = ปีฐาน()
  //response = การปล่อยก๊าซเรือนกระจก()

  //==================== หน้าสมาชิกทั้งหมด =========================//
  //response = ระบบสมาชิกทั้งหมด()

  //==================== หน้ารายงานทั้งหมด =========================//
  //response = รายงานทั้งหมด()
  //response = แยกรายงาน()

  //==================== หน้าDashboard =========================//
  //response = emissionทั้งหมด()
  //response = scope1()
  //response = scope2()
  //response = scope3()


  
  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };