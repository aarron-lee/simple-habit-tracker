import React, { FunctionComponent } from 'react';
import Calendar from 'ui/molecules/calendar/Calendar';
import MonthNav from 'ui/molecules/calendar/MonthNav';

type HabitProps = {
  habitId: string;
};

const Habit: FunctionComponent<HabitProps> = ({ habitId }) => {
  return (
    <div>
      <MonthNav>
        {({ month, year }: { month: number; year: number }) => (
          <Calendar month={month} year={year} />
        )}
      </MonthNav>
    </div>
  );
};

export default Habit;
