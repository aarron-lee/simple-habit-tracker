import React, { FunctionComponent } from 'react';
import CreateHabitDialog from 'ui/molecules/dialogs/CreateHabitDialog';
import useHabitIds from 'redux-modules/habits/hooks/useHabitIds';
import Habit from '../habit/Habit';
import { css } from 'emotion';

const habitContainerStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
`;

const Habits: FunctionComponent = () => {
  const habitIds = useHabitIds();
  return (
    <div>
      <CreateHabitDialog />
      <div className={habitContainerStyles}>
        {habitIds.map((habitId: string, idx: number) => {
          return <Habit habitId={habitId} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Habits;
