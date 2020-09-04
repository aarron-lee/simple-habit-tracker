import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useLoggedIn from 'hooks/useLoggedIn';

function AuthRoute({ path, children }) {
  const isLoggedIn = useLoggedIn();

  if (!isLoggedIn) {
    return <Redirect to={'/'} />;
  }

  return <Route path={path}>{children}</Route>;
}

export default AuthRoute;
