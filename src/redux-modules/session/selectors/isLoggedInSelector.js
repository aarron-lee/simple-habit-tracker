import { createSelector } from '@reduxjs/toolkit';
import sessionSliceSelector from './sessionSliceSelector';

const isLoggedInSelector = createSelector(sessionSliceSelector, (sessionSlice) =>
  Boolean(sessionSlice.user.uid)
);

export default isLoggedInSelector;
