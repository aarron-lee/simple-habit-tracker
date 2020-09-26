import { call, put, select } from 'redux-saga/effects';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import currentUserIdSelector from 'redux-modules/session/selectors/currentUserIdSelector';
import swapHabitOrder from 'firebase/habits/swapHabitOrder';

function* swapHabitOrderSaga(action) {
  const { firstHabitId, secondHabitId } = action.payload;
  const currentUserId = yield select(currentUserIdSelector);

  try {
    yield put(habitsSlice.routines.swapHabit.request());
    const habitIds = yield call(swapHabitOrder, {
      userId: currentUserId,
      firstHabitId,
      secondHabitId,
    });

    yield put(habitsSlice.routines.swapHabit.success({ habitIds }));
  } catch (e) {
    console.error(e);
    yield put(habitsSlice.routines.swapHabit.failure(e));
  } finally {
    yield put(habitsSlice.routines.swapHabit.fulfill());
  }
}

export default swapHabitOrderSaga;
