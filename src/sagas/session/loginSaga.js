import { put } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';

function* loginSaga(action) {
  try {
    yield put(sessionSlice.routines.login.request());
  } catch (e) {
    console.error(e);
    yield put(sessionSlice.routines.login.failure(e));
  } finally {
    yield put(sessionSlice.routines.login.fulfill());
  }
}

export default loginSaga;
