import createSliceWithRoutines from 'redux-modules/utils/createSliceWithRoutines';

const habitsSlice = createSliceWithRoutines({
  name: 'habits',
  initialState: {},
  reducers: {
    updateHabit: (state, action) => {
      const { habit, id } = action.payload;
      state[id] = { ...state[id], ...habit };
    },
    addHabit: (state, action) => {
      const { habit, id } = action.payload;
      state[id] = habit;
    },
    deleteHabit: (state, action) => {
      const { id } = action.payload;
      delete state[id];
    },
  },
  routines: {
    updateHistory: 'UPDATE_HISTORY',
    createHabit: 'CREATE_HABIT',
    deleteHabit: 'DELETE_HABIT',
    fetchHabit: 'FETCH_HABIT',
  },
  routineReducers: (routines) => ({
    [routines.createHabit.SUCCESS]: (state, action) => {
      const { habit, id } = action.payload;

      state[id] = habit;
    },
  }),
});

export default habitsSlice;
