import get from 'lodash/get';
import sessionSliceSelector from 'redux-modules/session/selectors/sessionSliceSelector';
import { createSelector } from '@reduxjs/toolkit';

const habitIdsSelector = createSelector([sessionSliceSelector], (session) =>
  get(session, 'userSettings.habitIds', [])
);

export default habitIdsSelector;
