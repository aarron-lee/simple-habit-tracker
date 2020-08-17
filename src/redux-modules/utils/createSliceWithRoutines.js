import noop from 'lodash/noop';
import { createSlice } from '@reduxjs/toolkit';
import { createRoutine, promisifyRoutine } from 'redux-saga-routines';

function createSliceWithRoutines({
  name,
  initialState = {},
  reducers = {},
  routines: routineInfo = {},
  routineReducers = noop,
  extraReducers = {},
  ...otherArgs
}) {
  if (typeof routineReducers !== 'function') {
    throw new Error('routineReducers must be a function that returns a reducerMap');
  }
  const routineNames = Object.keys(routineInfo);

  const routines = routineNames.reduce((createdRoutines, routineName) => {
    createdRoutines[routineName] = createRoutine(`${name}/${routineInfo[routineName]}`);
    return createdRoutines;
  }, {});

  const promisifiedRoutines = routineNames.reduce((promisifiedRoutinesAcc, routineName) => {
    const routine = routines[routineName];
    promisifiedRoutinesAcc[routineName] = promisifyRoutine(routine);
    return promisifiedRoutinesAcc;
  }, {});
  const slice = createSlice({
    name,
    reducers,
    initialState,
    extraReducers: {
      ...extraReducers,
      ...routineReducers(routines),
    },
    ...otherArgs,
  });
  slice.routines = routines;
  slice.promisifiedRoutines = promisifiedRoutines;
  return slice;
}
export default createSliceWithRoutines;
