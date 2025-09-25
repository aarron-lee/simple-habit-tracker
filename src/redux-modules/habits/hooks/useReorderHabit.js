import habitsSlice from "../habitsSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const { routines } = habitsSlice;

function useReorderHabit() {
  const dispatch = useDispatch();

  const reorderHabit = useCallback(
    ({ habitId, newPosition }) => {
      dispatch(routines.reorderHabit.trigger({ habitId, newPosition }));
    },
    [dispatch],
  );

  return reorderHabit;
}

export default useReorderHabit;
