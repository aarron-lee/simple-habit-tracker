import React, { FunctionComponent } from 'react';
import Calendar from 'ui/molecules/calendar/Calendar';
import MonthNav from 'ui/molecules/calendar/MonthNav';
import useHabit from 'redux-modules/habits/hooks/useHabit';

type HabitProps = {
  habitId: string;
};

const Habit: FunctionComponent<HabitProps> = ({ habitId }) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);
  if (!habit) {
    return null;
  }
  const { name, history = {} } = habit;
  return (
    <div>
      {name}
      <MonthNav>
        {({ month, year }: { month: number; year: number }) => (
          <Calendar month={month} year={year} />
        )}
      </MonthNav>
    </div>
  );
};

export default Habit;
