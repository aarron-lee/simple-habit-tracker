import { auth } from '../firebase';

function logoutUser() {
  return auth.signOut();
}

export default logoutUser;
