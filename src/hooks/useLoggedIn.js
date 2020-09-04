import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux-modules/session/selectors/getIsLoggedIn';

const useLoggedIn = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn;
};

export default useLoggedIn;
