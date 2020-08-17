import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const createStore = ({ initialState = {}, history }) => {
  const middleware = [routerMiddleware(history)];

  const store = configureStore({
    reducer: {
      router: connectRouter(history),
    },
    middleware,
    preloadedState: initialState,
  });

  return store;
};

export default createStore;
