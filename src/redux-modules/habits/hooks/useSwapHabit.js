import habitsSlice from '../habitsSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = habitsSlice;

function useSwapHabit() {
  const dispatch = useDispatch();

  const swapHabit = useCallback(
    ({ firstHabitId, secondHabitId }) => {
      dispatch(routines.swapHabit.trigger({ firstHabitId, secondHabitId }));
    },
    [dispatch]
  );

  return swapHabit;
}

export default useSwapHabit;
