import sessionSlice from '../sessionSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = sessionSlice;

function useUpdateHabitViewType() {
  const dispatch = useDispatch();

  const updateHabitViewType = useCallback(
    (info) => {
      const { habitViewType } = info;
      dispatch(routines.updateHabitViewType.trigger({ habitViewType }));
    },
    [dispatch]
  );

  return updateHabitViewType;
}

export default useUpdateHabitViewType;

