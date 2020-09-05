import React, { useCallback, SyntheticEvent } from 'react';
import useForm from 'hooks/useForm';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { css, cx } from 'emotion';
import useCreateUser from 'redux-modules/session/hooks/useCreateUser';
const formStyles = css`
  display: flex;
  flexdirection: column;
  alignitems: center;
  justifycontent: center;
  width: 100%;
  height: 100%;
`;

function SignUp() {
  const { formState, updateField } = useForm();

  const createUser = useCreateUser();

  const onSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      event.stopPropagation();
      createUser(formState);
    },
    [createUser, formState]
  );

  return (
    <div>
      <form onSubmit={onSubmit} className={cx(formStyles)}>
        Sign Up
        <TextField
          type="text"
          label="Display Name"
          value={formState.displayName || ''}
          name="displayName"
          placeholder="Display Name"
          onChange={updateField}
          required
        />
        <TextField
          type="email"
          label="Email Address"
          value={formState.email || ''}
          name="email"
          placeholder="Email Address"
          onChange={updateField}
          required
        />
        <TextField
          type="password"
          label="Password"
          required
          name="password"
          value={formState.password || ''}
          placeholder="Your Password"
          onChange={updateField}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
        <Link to="/signin">Sign in here</Link>
        <Link to="/passwordreset">Forgot Password?</Link>
      </form>
    </div>
  );
}

export default SignUp;
