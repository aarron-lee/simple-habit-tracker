import { firestore } from '../firebase';

async function createHabit({ userId, habitName, options = {} }) {
  const userSettingsRef = firestore.collection('users').doc(userId);

  const habitRef = firestore.collection('habits').doc();
  const habitId = habitRef.id;

  await firestore.runTransaction(async (transaction) => {
    const userSettingsDoc = await transaction.get(userSettingsRef);
    const userSettings = userSettingsDoc.data();

    transaction.set(habitRef, { name: habitName, userId, archived: false, ...options });

    transaction.update(userSettingsRef, { ...userSettings, habitIds: [...userSettings.habitIds, habitId] });
  });

  return [habitId, (await firestore.collection('habits').doc(habitId).get()).data()];
}

export default createHabit;
