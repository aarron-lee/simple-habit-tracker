import { all, call, spawn } from 'redux-saga/effects';
import sessionsSaga from './session/sagas/sessionSagas';
import habitSagas from './habits/sagas/habitSagas';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';

function* rootSaga() {
  const sagas = [sessionsSaga, habitSagas, routinePromiseWatcherSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* allSagas() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
