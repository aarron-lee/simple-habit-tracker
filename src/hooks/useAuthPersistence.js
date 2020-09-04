import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import sessionSlice from 'redux-modules/session/sessionSlice';

function useAuthPersistence() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      dispatch(sessionSlice.actions.setCurrentUser({ user: userAuth || {} }));
    });
  }, [dispatch]);
}

export default useAuthPersistence;
