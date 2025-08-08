import http from 'k6/http';
import { token } from './token.js';

export function emissionทั้งหมด() {
    const url = 'https://carbonfootprint.one.th/api/v2/industrials/92a3c919-8f64-4308-985c-c4cdf74516ac/overview/53507c30-133c-44f4-9a9a-f7632f025152?scope=all&facility_id=all';
    const headers = {
        'Cookie': `accessToken=` + token,
    };

    const res = http.get(url, { headers });

    //console.log(res.body); // แสดง response body

    return res;
}
