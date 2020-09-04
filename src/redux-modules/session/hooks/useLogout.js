import sessionSlice from '../sessionSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = sessionSlice;

function useLogout() {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(routines.logout.trigger());
  }, [dispatch]);

  return logout;
}

export default useLogout;
