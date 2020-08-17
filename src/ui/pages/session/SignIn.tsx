/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useCallback, SyntheticEvent } from 'react';
import useForm from 'hooks/useForm';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

function SignIn() {
  const { formState, updateField } = useForm();

  const onSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

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
        Sign In
        <TextField
          type="email"
          label="Email Address"
          value={formState.email}
          name="email"
          placeholder="Email Address"
          onChange={updateField}
        />
        <TextField
          type="password"
          label="Password"
          required
          name="password"
          value={formState.password}
          placeholder="Your Password"
          onChange={updateField}
        />
        <Button variant="contained" color="primary">
          Sign in
        </Button>
        <Link to="/signup">Sign up here</Link>
        <Link to="/passwordreset">Forgot Password?</Link>
      </form>
    </div>
  );
}

export default SignIn;
