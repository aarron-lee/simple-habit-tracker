import { firestore } from "../firebase";

function move(arr: string[], id: string, newPosition: number) {
  const oldPosition = arr.indexOf(id);

  if (oldPosition === -1) {
    console.error(`Error: Element with ID "${id}" not found in the array.`);
    return null;
  }

  if (oldPosition === newPosition) {
    return [...arr];
  }

  const newArr = [...arr];
  const [elementToMove] = newArr.splice(oldPosition, 1);
  const targetPosition = Math.min(Math.max(0, newPosition), newArr.length);

  newArr.splice(targetPosition, 0, elementToMove);
  return newArr;
}

async function reorderHabit({
  userId,
  habitId,
  newPosition,
}: {
  userId: string;
  habitId: string;
  newPosition: number;
}) {
  const userSettingsRef = firestore.collection("users").doc(userId);

  return await firestore.runTransaction(async (transaction) => {
    const userSettingsDoc = await transaction.get(userSettingsRef);
    const userSettings = userSettingsDoc.data();

    if (!userSettings || !userSettings.habitIds.includes(habitId)) {
      throw new Error("habit does not exist, cannot move the habit");
    }

    const newHabitIds = [...userSettings.habitIds];

    if (!newHabitIds[newPosition]) {
      throw new Error("habit position does not exist, cannot move the habit");
    }

    const result = move(newHabitIds, habitId, newPosition);

    await transaction.update(userSettingsRef, { habitIds: result });

    return newHabitIds;
  });
}

export default reorderHabit;
