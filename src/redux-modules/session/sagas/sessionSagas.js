import { takeEvery } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';
import loginSaga from './loginSaga';

function* sessionSagas() {
  yield takeEvery(sessionSlice.routines.login.TRIGGER, loginSaga);
}

export default sessionSagas;
