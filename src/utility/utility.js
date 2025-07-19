import dayjs from "dayjs";
const localeData = require('dayjs/plugin/localeData');
dayjs.extend(localeData);
dayjs.locale('th');

// npm install dayjs-plugin-localeData

export default function getlistDate() {
  const weekDays = [];
  const weekDaysShort = [];
  const monthfull = [];
  const monthShort = [];
  for (let i = 0; i < 7; i++) {
    const dayName = dayjs().day(i).format('dddd');
    const dayNameShort = dayjs().day(i).format('ddd');
    weekDays.push(dayName);
    weekDaysShort.push(dayNameShort);
  }
  for (let i = 0; i < 12; i++) {
    const fullMonthName = dayjs().month(i).format('MMMM');
    const shortMonthName = dayjs().day(i).format('MMM');
    monthfull.push(fullMonthName);
    monthShort.push(shortMonthName);
  }
  return {
    weekDays:{
      full:weekDays,
      short:weekDaysShort
    },    
    month:{
      full:monthfull,
      short:monthShort
    }
};
