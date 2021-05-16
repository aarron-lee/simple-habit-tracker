import React, { FunctionComponent } from 'react';
import Calendar from 'ui/molecules/calendar/Calendar';
import Card from '@material-ui/core/Card';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import IconButton from '@material-ui/core/IconButton';
import MonthNav from 'ui/molecules/calendar/MonthNav';
import Typography from '@material-ui/core/Typography';
import useHabit from 'redux-modules/habits/hooks/useHabit';
import { css } from 'emotion';
import { useDrag } from 'react-dnd';
import HabitOptions from './HabitOptions';
import HabitDropZone from './HabitDropZone';

const cardStyles: string = css`
  margin: 8px;
  padding: 16px;
  min-height: 352px;
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
  max-width: 18ch;
`;

type HabitProps = {
  habitId: string;
  order: number;
};

export type HabitDragItem = {
  type: string;
  id: string;
  order: number;
};

const Habit: FunctionComponent<HabitProps> = ({ habitId, order }) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);

  const [, drag, preview] = useDrag({
    item: { id: habitId, type: 'habit', order },
  });

  if (!habit) {
    return null;
  }
  const { name } = habit;
  return (
    <HabitDropZone habitId={habitId}>
      <Card className={cardStyles} ref={preview}>
        <div className={cardHeaderStyles}>
          <IconButton
            ref={drag}
            edge="start"
            aria-label="drag drop indicator for reordering habits"
          >
            <DragIndicatorIcon />
          </IconButton>
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
    </HabitDropZone>
  );
};

export default Habit;
