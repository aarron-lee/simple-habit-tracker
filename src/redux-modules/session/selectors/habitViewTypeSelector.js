import { createSelector } from '@reduxjs/toolkit';
import get from 'lodash/get';
import sessionSliceSelector from './sessionSliceSelector';

const habitViewTypeSelector = createSelector(sessionSliceSelector, (session) => {
  return get(session, 'userSettings.habitViewType', 'week');
});

export default habitViewTypeSelector;
