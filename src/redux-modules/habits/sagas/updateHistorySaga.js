import { call, put, select } from 'redux-saga/effects';
import get from 'lodash/get';
import habitsSlice from 'redux-modules/habits/habitsSlice';
import updateHistory from 'firebase/habits/updateHistory';
import habitSelector from '../selectors/habitSelector';

function* updateHistorySaga(action) {
  const { day, month, year, habitId } = action.payload;

  try {
    yield put(habitsSlice.routines.updateHistory.request());
    const habit = yield select(habitSelector(habitId));

    const { history = {} } = habit;

    const currentValue = get(history, [year, month, day], false);

    yield call(updateHistory, { year, month, day, habitId, newValue: !currentValue });

    yield put(habitsSlice.routines.updateHistory.success());
  } catch (e) {
    console.error(e);
    yield put(habitsSlice.routines.updateHistory.failure(e));
  } finally {
    yield put(habitsSlice.routines.updateHistory.fulfill());
  }
}

export default updateHistorySaga;
