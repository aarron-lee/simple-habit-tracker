import { createSelector } from '@reduxjs/toolkit';

export const sessionSliceSelector = (state) => state.session;

export const getIsLoggedIn = createSelector(sessionSliceSelector, (sessionSlice) =>
  Boolean(sessionSlice.user.uid)
);
