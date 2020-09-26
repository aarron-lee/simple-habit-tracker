import React, { FunctionComponent } from 'react';
import { useDrop } from 'react-dnd';
import { HabitDragItem } from './Habit';
import { css, cx } from 'emotion';
import useSwapHabit from 'redux-modules/habits/hooks/useSwapHabit';

const hoveringStyles = css`
  opacity: 0.8;
`;

const canDropStyles = css`
  opacity: 0.5;
`;

type Props = {
  habitId: string;
};

const HabitDropZone: FunctionComponent<Props> = (props) => {
  const { habitId } = props;
  const swapHabit = useSwapHabit();
  const [dropCollectedProps, drop] = useDrop({
    accept: 'habit',
    canDrop: (item: HabitDragItem) => {
      return item.type === 'habit' && item.id !== habitId;
    },
    drop: (item: HabitDragItem, monitor) => {
      const { id: droppedItemId, type: droppedItemType } = item;
      if (droppedItemType === 'habit') {
        // habit dropped, dispatch action to reorder habits
        swapHabit({ firstHabitId: droppedItemId, secondHabitId: habitId });
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isHovering: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={cx({
        [canDropStyles]: dropCollectedProps.canDrop,
        [hoveringStyles]: dropCollectedProps.isHovering && dropCollectedProps.canDrop,
      })}
    >
      {props.children}
    </div>
  );
};

export default HabitDropZone;
