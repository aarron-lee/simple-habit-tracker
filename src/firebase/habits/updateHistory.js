import { firestore } from '../firebase';

async function updateHistory({ year, month, day, habitId, newValue }) {
  const habitRef = firestore.collection('habits').doc(habitId);

  const newData = {
    history: {
      [year]: {
        [month]: {
          [day]: newValue,
        },
      },
    },
  };

  return await habitRef.set(newData, { merge: true });
}

export default updateHistory;
