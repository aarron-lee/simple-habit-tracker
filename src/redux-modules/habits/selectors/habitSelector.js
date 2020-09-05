import { createSelector } from '@reduxjs/toolkit';
import habitsSliceSelector from './habitsSliceSelector';

const habitSelector = (habitId) =>
  createSelector([habitsSliceSelector], (habits) => habits[habitId]);

export default habitSelector;
