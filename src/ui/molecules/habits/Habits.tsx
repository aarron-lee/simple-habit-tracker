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
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const Habits: FunctionComponent = () => {
  const habitIds = useHabitIds();
  return (
    <Flipper flipKey={`habits-${habitIds.join('')}`}>
      <div className={habitContainerStyles}>
        {habitIds.map((habitId: string, idx: number) => {
          return (
            <Flipped key={`habit-${habitId}`} flipId={`habit-${habitId}`}>
              <Habit habitId={habitId} />
            </Flipped>
          );
        })}
      </div>
    </Flipper>
  );
};

export default Habits;
