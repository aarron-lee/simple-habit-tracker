import { call, put, select } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import currentUserIdSelector from 'redux-modules/session/selectors/currentUserIdSelector';
import deleteHabit from 'firebase/habits/deleteHabit';

function* deleteHabitSaga(action) {
  const { habitId } = action.payload;
  const currentUserId = yield select(currentUserIdSelector);

  try {
    yield put(habitsSlice.routines.deleteHabit.request());

    yield call(deleteHabit, {
      userId: currentUserId,
      habitId,
    });

    yield put(habitsSlice.routines.deleteHabit.success({ id: habitId }));
  } catch (e) {
    console.error(e);
    yield put(habitsSlice.routines.deleteHabit.failure(e));
  } finally {
    yield put(habitsSlice.routines.deleteHabit.fulfill());
  }
}

export default deleteHabitSaga;
