import { firestore, auth } from '../firebase';

async function generateUserDocument(user, additionalData) {
  if (!user) throw new Error('User does not exist');

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName } = user;

    const newUserInfo = {
      displayName,
      email,
      ...additionalData,
    };

    await userRef.set(newUserInfo);

    return newUserInfo;
  }
}

async function createUser({ email, password, displayName }) {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  generateUserDocument(user, { displayName });

  return user;
}

export default createUser;
