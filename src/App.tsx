import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import NavBar from 'ui/atoms/navigation/NavBar';
import SignIn from 'ui/pages/session/SignIn';
import SignUp from 'ui/pages/session/SignUp';
import ProfilePage from 'ui/pages/ProfilePage';
import useAuthPersistence from 'hooks/useAuthPersistence';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AuthRoute from 'ui/atoms/route/AuthRoute';
import UnAuthRoute from 'ui/atoms/route/UnAuthRoute';

function App() {
  useAuthPersistence();
  return (
    <>
      <CssBaseline />
      <NavBar />
      <div>
        <Switch>
          <UnAuthRoute path="/signin">
            <SignIn />
          </UnAuthRoute>
          <UnAuthRoute path="/signup">
            <SignUp />
          </UnAuthRoute>
          <UnAuthRoute path="/passwordreset">
            <div>WIP</div>
          </UnAuthRoute>
          <AuthRoute path="/profile">
            <ProfilePage />
          </AuthRoute>
          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
