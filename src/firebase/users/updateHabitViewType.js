import { firestore } from '../firebase';

async function updateHabitViewType({ userId, habitViewType }) {
  const userSettingsRef = firestore.collection('users').doc(userId);

  await firestore.runTransaction(async (transaction) => {
    const userSettingsDoc = await transaction.get(userSettingsRef);
    const userSettings = userSettingsDoc.data();

    transaction.update(userSettingsRef, { habitIds: userSettings.habitIds, habitViewType });
  });

  return userId
}

export default updateHabitViewType;
