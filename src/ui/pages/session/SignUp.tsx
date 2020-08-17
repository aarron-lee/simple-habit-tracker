/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useCallback, SyntheticEvent } from 'react';
import useForm from 'hooks/useForm';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import useCreateUser from 'redux-modules/session/hooks/useCreateUser';

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
      <form
        onSubmit={onSubmit}
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
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
