import sessionSlice from '../sessionSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = sessionSlice;

function useCreateUser() {
  const dispatch = useDispatch();

  const createUser = useCallback(
    (userInfo) => {
      const { displayName, email, password } = userInfo;
      dispatch(routines.createUser.trigger({ displayName, email, password }));
    },
    [dispatch]
  );

  return createUser;
}

export default useCreateUser;
