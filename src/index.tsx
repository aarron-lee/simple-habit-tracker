import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from 'redux-modules/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import ThemeProvider from 'ui/atoms/themeProvider/ThemeProvider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { DndProvider } from 'react-dnd-multi-backend';
import { Provider } from 'react-redux';

const history = createHashHistory();

function initApp() {
  const store = createStore({ history });
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <DndProvider options={HTML5toTouch}>
          <ConnectedRouter history={history}>
            <ThemeProvider>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </ConnectedRouter>
        </DndProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

document.addEventListener('DOMContentLoaded', initApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') {
  serviceWorkerRegistration.register();
}
