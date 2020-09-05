import { call, cancel, cancelled, fork, put, select, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { firestore } from '../../../firebase/firebase';
import habitsSlice from '../habitsSlice';

function subscriptionChannel({ habitId }) {
  return eventChannel((emitter) => {
    const habitRef = firestore.doc(`habits/${habitId}`);

    const unsubscribe = habitRef.onSnapshot((querySnapshot) => {
      emitter({
        data: querySnapshot.data(),
        id: querySnapshot.id,
      });
    });

    return unsubscribe;
  });
}

export function* listen(action) {
  const { id: habitId } = action.payload;

  const channel = yield call(subscriptionChannel, { habitId });

  try {
    while (true) {
      const { data: habit } = yield take(channel);

      yield put(habitsSlice.actions.updateHabit({ habit, id: habitId }));
    }
  } finally {
    if (yield cancelled()) channel.close();
  }
}

export function* handleSubscribe(action) {
  const { id: habitId } = action.payload;
  const listenTask = yield fork(listen, action);

  while (true) {
    const unsubscribed = yield take(habitsSlice.actions.deleteHabit);
    if (
      unsubscribed.type === habitsSlice.actions.deleteHabit &&
      unsubscribed.payload.id === habitId
    ) {
      yield cancel(listenTask);
      break;
    }
  }
}

function* subscribeToHabitSaga() {
  yield takeEvery([habitsSlice.routines.fetchHabit.SUCCESS], handleSubscribe);
}

export default subscribeToHabitSaga;
