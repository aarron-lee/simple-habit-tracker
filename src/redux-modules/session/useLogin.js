import { routines } from './sessionSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

function useLogin() {
  const dispatch = useDispatch();

  const login = useCallback((loginInfo) => {
    dispatch(routines.login.trigger(loginInfo));
  }, []);

  return login;
}

export default useLogin;
