import React, { FunctionComponent } from 'react';
import Calendar from 'ui/molecules/calendar/Calendar';
import CreateHabitDialog from 'ui/molecules/dialogs/CreateHabitDialog';
import MonthNav from 'ui/molecules/calendar/MonthNav';

const Habits: FunctionComponent = () => {
  return (
    <div>
      <CreateHabitDialog />
      <MonthNav>
        {({ month, year }: { month: number; year: number }) => (
          <Calendar month={month} year={year} />
        )}
      </MonthNav>
    </div>
  );
};

export default Habits;
