import React, { useMemo, useCallback } from 'react';
import get from 'lodash/get';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import calculateWeeksInMonth from './calculateWeeksInMonth';
import Week from './Week';
import { useDispatch } from 'react-redux';
import useHabit from 'redux-modules/habits/hooks/useHabit';

function Calendar({ month, year, habitId }) {
  const weeks = useMemo(() => calculateWeeksInMonth({ month, year }), [month, year]);
  const dispatch = useDispatch();

  const onDayClick = useCallback(
    (day) => {
      dispatch(habitsSlice.routines.updateHistory.trigger({ day, month, year, habitId }));
    },
    [dispatch, habitId, month, year]
  );

  const { history = {} } = useHabit(habitId);

  return (
    <div>
      {weeks.map((week, idx) => {
        return (
          <Week
            week={week}
            key={idx}
            onDayClick={onDayClick}
            history={get(history, [year, month], {})}
          />
        );
      })}
    </div>
  );
}

export default Calendar;
