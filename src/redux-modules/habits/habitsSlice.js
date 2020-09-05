import createSliceWithRoutines from 'redux-modules/utils/createSliceWithRoutines';

const habitsSlice = createSliceWithRoutines({
  name: 'habits',
  initialState: {},
  reducers: {},
  routines: {
    createHabit: 'CREATE_HABIT',
  },
  routineReducers: (routines) => ({
    [routines.createHabit.SUCCESS]: (state, action) => {
      const { newHabit, newHabitId } = action.payload;

      state[newHabitId] = newHabit;
    },
  }),
});

export default habitsSlice;
