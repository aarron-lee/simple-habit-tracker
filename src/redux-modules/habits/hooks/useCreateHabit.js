import habitsSlice from '../habitsSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = habitsSlice;

function useCreateHabit() {
  const dispatch = useDispatch();

  const createUser = useCallback(
    (formState) => {
      const { habitName } = formState;
      dispatch(routines.createHabit.trigger({ habitName }));
    },
    [dispatch]
  );

  return createUser;
}

export default useCreateHabit;
