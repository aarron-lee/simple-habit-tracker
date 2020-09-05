import React, { useMemo } from 'react';
import calculateWeeksInMonth from './calculateWeeksInMonth';
import Week from './Week';

function Calendar({ month, year }) {
  const weeks = useMemo(() => calculateWeeksInMonth({ month, year }), [month, year]);

  return (
    <div>
      {weeks.map((week, idx) => {
        return <Week week={week} key={idx} />;
      })}
    </div>
  );
}

export default Calendar;
