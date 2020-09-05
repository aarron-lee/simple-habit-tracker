import { firestore, auth } from '../firebase';

async function generateUserDocument(user) {
  if (!user) throw new Error('User does not exist');

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const newUserInfo = {
      habitIds: [],
    };

    await userRef.set(newUserInfo);

    return newUserInfo;
  }
}

async function createUser({ email, password, displayName }) {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  user.updateProfile({
    displayName,
  });

  generateUserDocument(user);

  return user;
}

export default createUser;
