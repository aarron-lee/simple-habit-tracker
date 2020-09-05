import { put, call } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';
import createUser from 'firebase/users/createUser';
import { push } from 'connected-react-router';

function* createUserSaga(action) {
  const { displayName, email, password } = action.payload;

  try {
    yield put(sessionSlice.routines.createUser.request());

    const user = yield call(createUser, { email, password, displayName });

    yield put(
      sessionSlice.routines.createUser.success({
        user,
      })
    );

    yield put(push('/'));
  } catch (e) {
    console.error(e);
    yield put(sessionSlice.routines.createUser.failure(e));
  } finally {
    yield put(sessionSlice.routines.createUser.fulfill());
  }
}

export default createUserSaga;
