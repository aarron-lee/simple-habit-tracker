import { call, put, select } from "redux-saga/effects";
import habitsSlice from "redux-modules/habits/habitsSlice";
import currentUserIdSelector from "redux-modules/session/selectors/currentUserIdSelector";
import reorderHabit from "firebase/habits/reorderHabit";

function* reorderHabitSaga(action) {
  const { habitId, newPosition } = action.payload;
  const currentUserId = yield select(currentUserIdSelector);

  try {
    yield put(habitsSlice.routines.reorderHabit.request());
    const habitIds = yield call(reorderHabit, {
      userId: currentUserId,
      habitId,
      newPosition,
    });

    yield put(habitsSlice.routines.reorderHabit.success({ habitIds }));
  } catch (e) {
    console.error(e);
    yield put(habitsSlice.routines.reorderHabit.failure(e));
  } finally {
    yield put(habitsSlice.routines.reorderHabit.fulfill());
  }
}

export default reorderHabitSaga;
