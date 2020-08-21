import { auth } from '../firebase';

async function loginUser({ email, password }) {
  const { user } = await auth.signInWithEmailAndPassword(email, password);

  return user;
}

export default loginUser;
