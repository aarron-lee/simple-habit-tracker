import React, { FunctionComponent } from 'react';
import useHabitIds from 'redux-modules/habits/hooks/useHabitIds';
import Habit from '../habit/Habit';
import { css } from 'emotion';
import { Flipper, Flipped } from 'react-flip-toolkit';

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
    <div className={habitContainerStyles}>
      <Flipper flipKey={`habits-${habitIds.join('')}`}>
        {habitIds.map((habitId: string, idx: number) => {
          return (
            <Flipped key={`habit-${habitId}`} flipId={`habit-${habitId}`}>
              <Habit habitId={habitId} />
            </Flipped>
          );
        })}
      </Flipper>
    </div>
  );
};

export default Habits;
