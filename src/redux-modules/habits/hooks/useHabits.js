import { useSelector } from "react-redux";
import habitsSliceSelector from "../selectors/habitsSliceSelector";

const useHabits = () => {
  const habits = useSelector(habitsSliceSelector);

  return habits;
};

export default useHabits;
