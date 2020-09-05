import { useSelector } from 'react-redux';
import currentUserIdSelector from 'redux-modules/session/selectors/currentUserIdSelector';

const useCurrentUserId = () => {
  const uid = useSelector(currentUserIdSelector);

  return uid;
};

export default useCurrentUserId;
