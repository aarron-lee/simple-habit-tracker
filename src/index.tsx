import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from 'redux-modules/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from 'ui/atoms/themeProvider/ThemeProvider';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

const history = createHashHistory();

function initApp() {
  const store = createStore({ history });
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

document.addEventListener('DOMContentLoaded', initApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
