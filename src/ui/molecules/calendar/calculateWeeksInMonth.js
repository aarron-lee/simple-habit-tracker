import { getDay, getDaysInMonth } from 'date-fns';

const SATURDAY = 6;

function calculateWeeksInMonth({ month, year }) {
  // month is 0-indexed
  const numDaysInMonth = getDaysInMonth(new Date(year, month));
  // 0 Sun, 1 Mon, etc.
  const firstDayOfMonth = getDay(new Date(year, month, 1));

  const weeks = [];
  let currentDay = 1;
  console.log(numDaysInMonth);

  while (currentDay <= numDaysInMonth) {
    const week = [];

    if (weeks.length === 0) {
      // build first week
      for (let i = 0; i <= SATURDAY; i++) {
        if (i < firstDayOfMonth) {
          week.push(-1);
        } else {
          week.push(currentDay);
          currentDay++;
        }
      }
    } else {
      for (let i = 0; i <= SATURDAY; i++) {
        if (currentDay <= numDaysInMonth) {
          week.push(currentDay);
        } else {
          week.push(-1);
        }
        currentDay++;
      }
    }
    weeks.push(week);
  }

  return weeks;
}

export default calculateWeeksInMonth;
