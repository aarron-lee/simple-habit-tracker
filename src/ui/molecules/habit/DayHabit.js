import React, { useCallback } from "react";
import useHabit from "redux-modules/habits/hooks/useHabit";
import { css, cx } from "emotion";
import { useDispatch, useSelector } from "react-redux";
import habitsSlice from "redux-modules/habits/habitsSlice";
import { get } from "lodash";
import selectIsArchiveRoute from "redux-modules/habits/selectors/selectIsArchiveRoute";

const size = 110;

const dayHabitStyles = css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  text-transform: capitalize;
  margin: 0.8rem;
  font-size: 1rem;
  white-space: normal;
`;

const inactiveStyles = css`
  border: 5px solid lightblue;
`;

const activeStyles = css`
  border: 5px solid green;
`;

const DayHabit = ({ habitId, year, month, day }) => {
  const habit = useHabit(habitId);
  const showArchivedOnly = useSelector(selectIsArchiveRoute);

  const dispatch = useDispatch();

  const onDayClick = useCallback(() => {
    dispatch(
      habitsSlice.routines.updateHistory.trigger({
        day,
        month,
        year,
        habitId,
      }),
    );
  }, [dispatch, habitId, month, year, day]);

  if (!habit) {
    return null;
  }

  if (showArchivedOnly && habit.archived === false) {
    return null;
  }

  if (!showArchivedOnly && habit.archived === true) {
    return null;
  }

  const { name, history } = habit;
  const isActive = get(history, [year, month, day], false);

  return (
    <button
      className={cx(
        dayHabitStyles,
        isActive && activeStyles,
        !isActive && inactiveStyles,
      )}
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onDayClick();
      }}
    >
      {name}
    </button>
  );
};

export default DayHabit;
