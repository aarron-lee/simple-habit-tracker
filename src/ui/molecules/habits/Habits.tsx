import React, { FunctionComponent } from 'react';
import CreateHabitDialog from 'ui/molecules/dialogs/CreateHabitDialog';
import useHabitIds from 'redux-modules/habits/hooks/useHabitIds';
import Habit from '../habit/Habit';

const Habits: FunctionComponent = () => {
  const habitIds = useHabitIds();
  return (
    <div>
      <CreateHabitDialog />
      {habitIds.map((habitId: string, idx: number) => {
        return <Habit habitId={habitId} key={idx} />;
      })}
    </div>
  );
};

export default Habits;
