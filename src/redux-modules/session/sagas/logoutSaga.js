import { put, call } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';
import logoutUser from 'firebase/users/logoutUser';

function* logoutSaga() {
  try {
    yield put(sessionSlice.routines.logout.request());

    yield call(logoutUser);
    yield put(sessionSlice.routines.logout.success());
  } catch (e) {
    console.error(e);
    yield put(sessionSlice.routines.logout.failure(e));
  } finally {
    yield put(sessionSlice.routines.logout.fulfill());
  }
}

export default logoutSaga;
