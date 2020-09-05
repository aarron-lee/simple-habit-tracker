import { firestore } from '../firebase';

async function createHabit({ userId, habitName, options = {} }) {
  const habitRef = firestore.collection('habits');

  const result = await habitRef.add({ name: habitName, userId, ...options });

  return result;
}

export default createHabit;
