import React, { useMemo } from 'react';
import calculateWeeksInMonth from './calculateWeeksInMonth';

function Calendar({ month, year }) {
  const weeks = useMemo(() => calculateWeeksInMonth({ month, year }), [month, year]);

  return (
    <div>
      {weeks.map((week) => {
        return JSON.stringify(week);
      })}
    </div>
  );
}

export default Calendar;
