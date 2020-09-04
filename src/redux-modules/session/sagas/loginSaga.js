import { put, call } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';
import loginUser from 'firebase/users/loginUser';

function* loginSaga(action) {
  const { email, password } = action.payload;
  console.log(action);
  try {
    yield put(sessionSlice.routines.login.request());

    const { user } = yield call(loginUser, { email, password });

    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
    }

    const { uid, emailVerified, displayName } = user;

    yield put(
      sessionSlice.routines.login.success({
        user: { uid, email, emailVerified, displayName },
      })
    );
  } catch (e) {
    console.error(e);
    yield put(sessionSlice.routines.login.failure(e));
  } finally {
    yield put(sessionSlice.routines.login.fulfill());
  }
}

export default loginSaga;
