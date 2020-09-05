import React from 'react';
import CreateHabitDialog from 'ui/molecules/dialogs/CreateHabitDialog';
import CssBaseline from '@material-ui/core/CssBaseline';
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
            <CreateHabitDialog />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
