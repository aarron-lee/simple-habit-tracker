import { put } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';

function* createUserSaga(action) {
  try {
    yield put(sessionSlice.routines.createUser.request());
  } catch (e) {
    console.error(e);
    yield put(sessionSlice.routines.createUser.failure(e));
  } finally {
    yield put(sessionSlice.routines.createUser.fulfill());
  }
}

export default createUserSaga;
