import React, { FunctionComponent } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Calendar from 'ui/molecules/calendar/Calendar';
import MonthNav from 'ui/molecules/calendar/MonthNav';
import useHabit from 'redux-modules/habits/hooks/useHabit';
import { css } from 'emotion';
import { IconButton } from '@material-ui/core';

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

type HabitProps = {
  habitId: string;
};

const Habit: FunctionComponent<HabitProps> = ({ habitId }) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);

  if (!habit) {
    return null;
  }
  const { name } = habit;
  return (
    <Card className={cardStyles}>
      <div className={cardHeaderStyles}>
        <Typography variant="h6">{name}</Typography>
        <div className={fillerStyles} />
        <IconButton style={{ padding: '8px', width: '12px', height: '12px' }}>
          <CloseIcon />
        </IconButton>
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
