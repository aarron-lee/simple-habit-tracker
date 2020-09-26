import { firestore } from '../firebase';

async function updateHabitOrder({
  userId,
  habitIdToMove,
  newLocation,
}: {
  userId: string;
  habitIdToMove: string;
  newLocation: number;
}) {
  const userSettingsRef = firestore.collection('users').doc(userId);

  return await firestore.runTransaction(async (transaction) => {
    const userSettingsDoc = await transaction.get(userSettingsRef);
    const userSettings = userSettingsDoc.data();

    if (!userSettings || !userSettings.habitIds.includes(habitIdToMove)) {
      throw new Error('habit does not exist, cannot move the habit');
    }

    const newHabitIds = [...userSettings.habitIds].filter((habitId) => habitId !== habitIdToMove);

    // insert habitId into new location
    newHabitIds.splice(newLocation, 0, habitIdToMove);

    await transaction.update(userSettingsRef, { habitIds: newHabitIds });

    return newHabitIds;
  });
}

export default updateHabitOrder;
