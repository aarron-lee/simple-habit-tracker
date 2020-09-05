import { useSelector } from 'react-redux';
import habitSelector from '../selectors/habitSelector';

const useHabit = (habitId) => {
  const habit = useSelector(habitSelector(habitId));

  return habit;
};

export default useHabit;
