import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import useLogout from 'redux-modules/session/hooks/useLogout';

const SignOut: FunctionComponent = (props) => {
  const logout = useLogout();
  return (
    <Button onClick={logout} variant="contained" color="primary" {...props}>
      Sign Out
    </Button>
  );
};

export default SignOut;
