import { useSelector } from 'react-redux';
import habitViewTypeSelector from '../selectors/habitViewTypeSelector';

const useHabitViewType = () => {
  const habit = useSelector(habitViewTypeSelector);

  return habit;
};

export default useHabitViewType;
