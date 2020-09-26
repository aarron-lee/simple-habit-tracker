import { firestore } from '../firebase';

async function swapHabitOrder({
  userId,
  firstHabitId,
  secondHabitId,
}: {
  userId: string;
  firstHabitId: string;
  secondHabitId: string;
}) {
  const userSettingsRef = firestore.collection('users').doc(userId);

  return await firestore.runTransaction(async (transaction) => {
    const userSettingsDoc = await transaction.get(userSettingsRef);
    const userSettings = userSettingsDoc.data();

    if (
      !userSettings ||
      !userSettings.habitIds.includes(firstHabitId) ||
      !userSettings.habitIds.includes(secondHabitId)
    ) {
      throw new Error('habit does not exist, cannot move the habit');
    }

    const newHabitIds = [...userSettings.habitIds];
    const firstHabitIdx = newHabitIds.indexOf(firstHabitId);
    const secondHabitIdx = newHabitIds.indexOf(secondHabitId);

    // swap IDs in arr
    newHabitIds[firstHabitIdx] = secondHabitId;
    newHabitIds[secondHabitIdx] = firstHabitIdx;

    await transaction.update(userSettingsRef, { habitIds: newHabitIds });

    return newHabitIds;
  });
}

export default swapHabitOrder;
