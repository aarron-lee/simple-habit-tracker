import React, { useCallback, SyntheticEvent, FunctionComponent } from 'react';
import useForm from 'hooks/useForm';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { css, cx } from 'emotion';
import useLogin from 'redux-modules/session/hooks/useLogin';

const formStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  > * {
    margin: 5px;
  }
`;

type SignInProps = {
  className?: string | undefined;
};

const SignIn: FunctionComponent<SignInProps> = ({ className }) => {
  const { formState, updateField } = useForm();
  const login = useLogin();

  const onSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      event.stopPropagation();
      login(formState);
    },
    [formState, login]
  );

  return (
    <div>
      <form onSubmit={onSubmit} className={cx(formStyles, className)}>
        Sign In
        <TextField
          type="email"
          label="Email Address"
          value={formState.email || ''}
          name="email"
          placeholder="Email Address"
          onChange={updateField}
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
          Sign in
        </Button>
        <Link to="/signup">Sign up here</Link>
        <Link to="/passwordreset">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default SignIn;
