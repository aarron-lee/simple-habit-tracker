import { useSelector } from 'react-redux';
import habitIdsSelector from '../selectors/habitIdsSelectors';

const useHabitIds = () => {
  const habitIds = useSelector(habitIdsSelector);

  return habitIds;
};

export default useHabitIds;
