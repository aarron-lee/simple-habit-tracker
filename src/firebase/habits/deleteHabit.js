import { firestore } from '../firebase';

async function deleteHabit({ userId, habitId }) {
  const userSettingsRef = firestore.collection('users').doc(userId);
  const habitRef = firestore.collection('habits').doc(habitId);

  return await firestore.runTransaction(async (transaction) => {
    const userSettingsDoc = await transaction.get(userSettingsRef);
    const userSettings = userSettingsDoc.data();

    transaction.delete(habitRef);

    const newHabitIds = userSettings.habitIds.filter((id) => id !== habitId);

    transaction.update(userSettingsRef, { habitIds: newHabitIds });
  });
}

export default deleteHabit;
