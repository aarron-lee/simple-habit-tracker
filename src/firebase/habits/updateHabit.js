import { firestore } from '../firebase';

async function updateHabit({ id, habit }) {
  const habitRef = firestore.collection('habits').doc(id);

  const newData = {
    ...habit,
  };

  return await habitRef.set(newData, { merge: true });
}

export default updateHabit;
