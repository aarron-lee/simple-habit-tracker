import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';
import sessionSliceSelector from './sessionSliceSelector';

const currentUserIdSelector = createSelector(sessionSliceSelector, (session) => {
  return get(session, 'user.uid', undefined);
});

export default currentUserIdSelector;
