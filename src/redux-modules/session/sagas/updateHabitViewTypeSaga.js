import { put, call, select } from 'redux-saga/effects';
import currentUserIdSelector from 'redux-modules/session/selectors/currentUserIdSelector';
import sessionSlice from 'redux-modules/session/sessionSlice';
import updateHabitViewType from 'firebase/users/updateHabitViewType';

function* updateHabitViewTypeSaga(action) {
  const { habitViewType } = action.payload;
  const currentUserId = yield select(currentUserIdSelector);

  try {
    yield put(sessionSlice.routines.updateHabitViewType.request());

    const userId = yield call(updateHabitViewType, { userId: currentUserId, habitViewType });

    yield put(
      sessionSlice.routines.updateHabitViewType.success({
        userId, habitViewType
      })
    );

  } catch (e) {
    console.error(e);
    yield put(sessionSlice.routines.updateHabitViewType.failure(e));
  } finally {
    yield put(sessionSlice.routines.updateHabitViewType.fulfill());
  }
}

export default updateHabitViewTypeSaga;
