import { call, put } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import updateHabit from 'firebase/habits/updateHabit';

function* updateHabitSaga(action) {
  const { id, habit } = action.payload;

  try {
    yield put(habitsSlice.routines.updateHabit.request());
    yield call(updateHabit, {
      id,
      habit,
    });

    yield put(habitsSlice.routines.updateHabit.success({ id, updatedHabitProperties: habit }));
  } catch (e) {
    console.error(e);
    yield put(habitsSlice.routines.updateHabit.failure(e));
  } finally {
    yield put(habitsSlice.routines.updateHabit.fulfill());
  }
}

export default updateHabitSaga;
