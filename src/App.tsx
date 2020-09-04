import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import SignIn from 'ui/pages/session/SignIn';
import SignUp from 'ui/pages/session/SignUp';
import ProfilePage from 'ui/pages/ProfilePage';
import './App.css';
import useAuthPersistence from 'hooks/useAuthPersistence';
import SignOut from 'ui/pages/atoms/buttons/SignOut';

function App() {
  useAuthPersistence();
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/passwordreset">
        <SignUp />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/">
        <div className="App">
          <SignOut />
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
        </div>
      </Route>
    </Switch>
  );
}

export default App;
