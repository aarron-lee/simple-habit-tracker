import { useSelector } from 'react-redux';
import isLoggedInSelector from 'redux-modules/session/selectors/isLoggedInSelector';

const useLoggedIn = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return isLoggedIn;
};

export default useLoggedIn;
