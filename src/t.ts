import { DateTime } from './datetime'
import { rrulestr } from './rrulestr'

console.log('Started')

const r = "DTSTART:20230503T100647Z\nRRULE:FREQ=HOURLY;UNTIL=20240502T100347Z;BYMONTHDAY=1;BYYEARDAY=2;BYWEEKNO=3;BYHOUR=4;BYMINUTE=5";

const rr = rrulestr(r);

console.time();

console.log(DateTime.fromDate(rr.after(new Date())));
console.timeEnd();

/*
const res = rr.all((d, len) => {
  console.log(d);
  return false;
});

console.log(res);

*/
