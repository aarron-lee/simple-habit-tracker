import { call, cancel, cancelled, fork, put, select, take, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { firestore } from '../../../firebase/firebase';
import currentUserIdSelector from '../selectors/currentUserIdSelector';
import sessionSlice from '../sessionSlice';

function subscriptionChannel({ userId }) {
  return eventChannel((emitter) => {
    const userSettingsRef = firestore.doc(`users/${userId}`);

    const unsubscribe = userSettingsRef.onSnapshot((querySnapshot) => {
      emitter({
        data: querySnapshot.data(),
        userId,
      });
    });

    return unsubscribe;
  });
}

export function* listen() {
  const currentUserId = yield select(currentUserIdSelector);

  const channel = yield call(subscriptionChannel, { userId: currentUserId });

  try {
    while (true) {
      const { data } = yield take(channel);

      yield put(sessionSlice.actions.setUserSettings({ userSettings: data }));
    }
  } finally {
    if (yield cancelled()) channel.close();
  }
}

export function* handleSubscribe(action) {
  const listenTask = yield fork(listen, action);

  const unsubscribed = yield take(sessionSlice.routines.logout.SUCCESS);

  if (unsubscribed.type === sessionSlice.routines.logout.SUCCESS) {
    yield cancel(listenTask);
  }
}

export function* subscribeToUserSettingsSaga() {
  yield takeLatest(
    [
      sessionSlice.actions.setCurrentUser,
      sessionSlice.routines.login.SUCCESS,
      sessionSlice.routines.createUser.SUCCESS,
    ],
    handleSubscribe
  );
}
