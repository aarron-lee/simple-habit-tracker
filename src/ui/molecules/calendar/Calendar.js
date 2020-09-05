import React, { useMemo, useCallback } from 'react';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import calculateWeeksInMonth from './calculateWeeksInMonth';
import Week from './Week';
import { useDispatch } from 'react-redux';

function Calendar({ month, year, habitId }) {
  const weeks = useMemo(() => calculateWeeksInMonth({ month, year }), [month, year]);
  const dispatch = useDispatch();

  const onDayClick = useCallback(
    (day) => {
      dispatch(habitsSlice.routines.updateHistory.trigger({ day, month, year, habitId }));
    },
    [dispatch, habitId, month, year]
  );

  return (
    <div>
      {weeks.map((week, idx) => {
        return <Week week={week} key={idx} onDayClick={onDayClick} />;
      })}
    </div>
  );
}

export default Calendar;
