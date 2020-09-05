import { put, call } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import { push } from 'connected-react-router';

function* createHabitSaga(action) {
  const { habitName, options = {} } = action.payload;

  try {
    yield put(habitsSlice.routines.createHabit.request());
  } catch (e) {
    console.error(e);
    yield put(habitsSlice.routines.createHabit.failure(e));
  } finally {
    yield put(habitsSlice.routines.createHabit.fulfill());
  }
}

export default createHabitSaga;
