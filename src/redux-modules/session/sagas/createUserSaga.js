import { put, call } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';
import createUser from 'firebase/users/createUser';

function* createUserSaga(action) {
  const { displayName, email, password } = action.payload;

  try {
    yield put(sessionSlice.routines.createUser.request());

    const newUserInfo = yield call(createUser, { email, password, displayName });

    console.log(newUserInfo);

    const { uid, email: newEmail, emailVerified, displayName: newDisplayName } = newUserInfo;

    yield put(
      sessionSlice.routines.createUser.success({
        user: { uid, email: newEmail, emailVerified, displayName: newDisplayName },
      })
    );
  } catch (e) {
    console.error(e);
    yield put(sessionSlice.routines.createUser.failure(e));
  } finally {
    yield put(sessionSlice.routines.createUser.fulfill());
  }
}

export default createUserSaga;
