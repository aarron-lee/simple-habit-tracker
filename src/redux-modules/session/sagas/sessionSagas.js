import { takeEvery } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';
import loginSaga from './loginSaga';
import createUserSaga from './createUserSaga';

function* sessionSagas() {
  yield takeEvery(sessionSlice.routines.login.TRIGGER, loginSaga);
  yield takeEvery(sessionSlice.routines.createUser.TRIGGER, createUserSaga);
}

export default sessionSagas;
