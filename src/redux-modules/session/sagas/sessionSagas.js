import { fork, takeEvery } from 'redux-saga/effects';
import sessionSlice from 'redux-modules/session/sessionSlice';
import loginSaga from './loginSaga';
import createUserSaga from './createUserSaga';
import logoutSaga from './logoutSaga';
import { subscribeToUserSettingsSaga } from './subcribeToUserSettingsSaga';
import updateHabitViewTypeSaga from './updateHabitViewTypeSaga';

function* sessionSagas() {
  yield takeEvery(sessionSlice.routines.login.TRIGGER, loginSaga);
  yield takeEvery(sessionSlice.routines.logout.TRIGGER, logoutSaga);
  yield takeEvery(sessionSlice.routines.createUser.TRIGGER, createUserSaga);
  yield takeEvery(sessionSlice.routines.updateHabitViewType.TRIGGER, updateHabitViewTypeSaga);
  yield fork(subscribeToUserSettingsSaga);
}

export default sessionSagas;
