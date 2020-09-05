import { takeEvery, fork } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import createHabitSaga from './createHabitSaga';
import subscribeToHabitsSaga from './subcribeToHabitsSaga';

function* habitSagas() {
  yield takeEvery(habitsSlice.routines.createHabit.TRIGGER, createHabitSaga);
  yield fork(subscribeToHabitsSaga);
}

export default habitSagas;
