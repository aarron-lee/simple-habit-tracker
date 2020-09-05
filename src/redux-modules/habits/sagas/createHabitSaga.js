import { call, put, select } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import currentUserIdSelector from 'redux-modules/session/selectors/currentUserIdSelector';
import createHabit from 'firebase/habits/createHabit';

function* createHabitSaga(action) {
  const { habitName, options = {} } = action.payload;
  const currentUserId = yield select(currentUserIdSelector);

  try {
    yield put(habitsSlice.routines.createHabit.request());
    const newHabit = yield call(createHabit, { userId: currentUserId, habitName, options });

    yield put(habitsSlice.routines.createHabit.success({ habit: newHabit }));
  } catch (e) {
    console.error(e);
    yield put(habitsSlice.routines.createHabit.failure(e));
  } finally {
    yield put(habitsSlice.routines.createHabit.fulfill());
  }
}

export default createHabitSaga;
