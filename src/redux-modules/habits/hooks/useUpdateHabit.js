import habitsSlice from '../habitsSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = habitsSlice;

function useUpdateHabit() {
  const dispatch = useDispatch();

  const createUser = useCallback(
    ({ id, habit: { name } }) => {
      dispatch(routines.updateHabit.trigger({ id, habit: { name } }));
    },
    [dispatch]
  );

  return createUser;
}

export default useUpdateHabit;
