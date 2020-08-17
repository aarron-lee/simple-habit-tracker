import sessionSlice from '../sessionSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = sessionSlice;

function useLogin() {
  const dispatch = useDispatch();

  const login = useCallback(
    (loginInfo) => {
      dispatch(routines.login.trigger(loginInfo));
    },
    [dispatch]
  );

  return login;
}

export default useLogin;
