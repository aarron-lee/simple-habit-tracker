import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  select,
  take,
  takeLatest,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { firestore } from "../../../firebase/firebase";
import habitsSlice from "../habitsSlice";
import sessionSlice from "redux-modules/session/sessionSlice";
import currentUserIdSelector from "redux-modules/session/selectors/currentUserIdSelector";

function subscriptionChannel({ userId }) {
  return eventChannel((emitter) => {
    const habitsRef = firestore
      .collection("habits")
      .where("userId", "==", userId);
    // .where('archived', '==', false);

    const unsubscribe = habitsRef.onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        emitter({
          type: change.type,
          data: change.doc.data(),
          id: change.doc.id,
        });
      });
    });

    return unsubscribe;
  });
}

export function* listen(action) {
  const currentUserId = yield select(currentUserIdSelector);

  const channel = yield call(subscriptionChannel, { userId: currentUserId });

  try {
    while (true) {
      const { data: habit, id, type } = yield take(channel);

      switch (type) {
        case "added": {
          yield put(habitsSlice.actions.addHabit({ habit, id }));
          break;
        }
        case "modified": {
          yield put(habitsSlice.actions.updateHabit({ habit, id }));
          break;
        }
        case "removed": {
          yield put(habitsSlice.actions.deleteHabit({ habit, id }));
          break;
        }
        default:
          break;
      }
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

function* subscribeToHabitsSaga() {
  yield takeLatest(
    [
      sessionSlice.actions.setCurrentUser,
      sessionSlice.routines.login.SUCCESS,
      sessionSlice.routines.createUser.SUCCESS,
    ],
    handleSubscribe,
  );
}

export default subscribeToHabitsSaga;
