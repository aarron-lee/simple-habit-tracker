import { takeEvery } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import createHabitSaga from './createHabitSaga';

function* habitSagas() {
  yield takeEvery(habitsSlice.routines.createHabit.TRIGGER, createHabitSaga);
}

export default habitSagas;
