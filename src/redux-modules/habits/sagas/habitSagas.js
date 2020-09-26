import { takeEvery, fork } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import createHabitSaga from './createHabitSaga';
import updateHabitSaga from './updateHabitSaga';
import updateHistorySaga from './updateHistorySaga';
import subscribeToHabitsSaga from './subcribeToHabitsSaga';
import deleteHabitSaga from './deleteHabitSaga';
import swapHabitOrderSaga from './swapHabitOrderSaga';

function* habitSagas() {
  yield takeEvery(habitsSlice.routines.createHabit.TRIGGER, createHabitSaga);
  yield takeEvery(habitsSlice.routines.updateHabit.TRIGGER, updateHabitSaga);
  yield takeEvery(habitsSlice.routines.updateHistory.TRIGGER, updateHistorySaga);
  yield takeEvery(habitsSlice.routines.deleteHabit.TRIGGER, deleteHabitSaga);
  yield takeEvery(habitsSlice.routines.swapHabit.TRIGGER, swapHabitOrderSaga);
  yield fork(subscribeToHabitsSaga);
}

export default habitSagas;
