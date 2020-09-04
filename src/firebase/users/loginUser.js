import { auth } from '../firebase';

async function loginUser({ email, password }) {
  return await auth.signInWithEmailAndPassword(email, password);
}

export default loginUser;
