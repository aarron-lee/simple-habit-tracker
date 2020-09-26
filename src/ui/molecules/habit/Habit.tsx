import React, { FunctionComponent } from 'react';
import Calendar from 'ui/molecules/calendar/Calendar';
import Card from '@material-ui/core/Card';
import MonthNav from 'ui/molecules/calendar/MonthNav';
import Typography from '@material-ui/core/Typography';
import useHabit from 'redux-modules/habits/hooks/useHabit';
import { css } from 'emotion';
import HabitOptions from './HabitOptions';

const cardStyles: string = css`
  margin: 8px;
  padding: 16px;
  text-transform: capitalize;
  position: relative;
`;

const fillerStyles: string = css`
  flex-grow: 1;
`;

const cardHeaderStyles: string = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const titleStyles: string = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 20ch;
`;

type HabitProps = {
  habitId: string;
  order: number;
};

const Habit: FunctionComponent<HabitProps> = ({ habitId, order }) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);

  if (!habit) {
    return null;
  }
  const { name } = habit;
  return (
    <Card className={cardStyles}>
      <div className={cardHeaderStyles}>
        <Typography variant="h6" className={titleStyles}>
          {name}
        </Typography>
        <div className={fillerStyles} />
        <HabitOptions habitId={habitId} />
      </div>
      <MonthNav>
        {({ month, year }: { month: number; year: number }) => (
          <Calendar month={month} year={year} habitId={habitId} />
        )}
      </MonthNav>
    </Card>
  );
};

export default Habit;
