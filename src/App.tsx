import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import NavBar from 'ui/atoms/navigation/NavBar';
import SignIn from 'ui/pages/session/SignIn';
import SignUp from 'ui/pages/session/SignUp';
import ProfilePage from 'ui/pages/ProfilePage';
import useAuthPersistence from 'hooks/useAuthPersistence';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  useAuthPersistence();
  return (
    <>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
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
      </Grid>
    </>
  );
}

export default App;
