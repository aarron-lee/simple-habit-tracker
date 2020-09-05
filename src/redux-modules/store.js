import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import sessionSlice from './session/sessionSlice';
import habitsSlice from './habits/habitsSlice';

const createStore = ({ initialState = {}, history }) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const store = configureStore({
    reducer: {
      session: sessionSlice.reducer,
      habits: habitsSlice.reducer,
      router: connectRouter(history),
    },
    middleware,
    preloadedState: initialState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
