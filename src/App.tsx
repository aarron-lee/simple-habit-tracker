import React from "react";
import NavBar from "ui/atoms/navigation/NavBar";
import SignIn from "ui/pages/session/SignIn";
import SignUp from "ui/pages/session/SignUp";
import ProfilePage from "ui/pages/ProfilePage";
import useAuthPersistence from "hooks/useAuthPersistence";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AuthRoute from "ui/atoms/route/AuthRoute";
import UnAuthRoute from "ui/atoms/route/UnAuthRoute";
import { css } from "emotion";
import useLoggedIn from "hooks/useLoggedIn";
import Habits from "ui/molecules/habits/Habits";
import LandingPage from "ui/pages/LandingPage";

const appStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  useAuthPersistence();
  const isLoggedIn = useLoggedIn();
  return (
    <>
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
          <AuthRoute path="/notes">
            <ProfilePage />
          </AuthRoute>
          <Switch>
            <Route path="/archive">
              <div className={appStyles}>
                {isLoggedIn ? <Habits /> : <LandingPage />}
              </div>
            </Route>
            <Route path="/">
              <div className={appStyles}>
                {isLoggedIn ? <Habits /> : <LandingPage />}
              </div>
            </Route>
          </Switch>
        </Switch>
      </div>
    </>
  );
}

export default App;
