import { takeEvery, fork } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import createHabitSaga from './createHabitSaga';
import updateHistorySaga from './updateHistorySaga';
import subscribeToHabitsSaga from './subcribeToHabitsSaga';

function* habitSagas() {
  yield takeEvery(habitsSlice.routines.createHabit.TRIGGER, createHabitSaga);
  yield takeEvery(habitsSlice.routines.updateHistory.TRIGGER, updateHistorySaga);
  yield fork(subscribeToHabitsSaga);
}

export default habitSagas;
