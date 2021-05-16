import habitsSlice from '../habitsSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = habitsSlice;

function useUpdateHabit() {
  const dispatch = useDispatch();

  const updateHabit = useCallback(
    ({ id, habit }) => {
      dispatch(routines.updateHabit.trigger({ id, habit }));
    },
    [dispatch]
  );

  return updateHabit;
}

export default useUpdateHabit;
