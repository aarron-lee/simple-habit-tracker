import habitsSlice from '../habitsSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = habitsSlice;

function useDeleteHabit(habitId) {
  const dispatch = useDispatch();

  const deleteHabit = useCallback(() => {
    dispatch(routines.deleteHabit.trigger({ habitId }));
  }, [dispatch, habitId]);

  return deleteHabit;
}

export default useDeleteHabit;
