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
import selectIsArchiveRoute from "../selectors/selectIsArchiveRoute";
import { LOCATION_CHANGE } from "connected-react-router";

function subscriptionChannel({ userId, archived }) {
  return eventChannel((emitter) => {
    let habitsRef;
    if (archived) {
      habitsRef = firestore
        .collection("habits")
        .where("userId", "==", userId)
        .where("archived", "==", true);
    } else {
      habitsRef = firestore
        .collection("habits")
        .where("userId", "==", userId)
        .where("archived", "==", false);
    }

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
  const archived = yield select(selectIsArchiveRoute);

  if (currentUserId) {
    const channel = yield call(subscriptionChannel, {
      userId: currentUserId,
      archived,
    });

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
}

export function* handleSubscribe(action) {
  const listenTask = yield fork(listen, action);
  const unsubscribed = yield take(sessionSlice.routines.logout.SUCCESS);
  const routeChange = yield take(LOCATION_CHANGE);

  if (routeChange.type === LOCATION_CHANGE) {
    yield cancel(listenTask);
  }

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
      LOCATION_CHANGE,
    ],
    handleSubscribe,
  );
}

export default subscribeToHabitsSaga;
