import createSliceWithRoutines from 'redux-modules/utils/createSliceWithRoutines';

const sessionSlice = createSliceWithRoutines({
  name: 'session',
  initialState: {
    user: {},
  },
  routines: {
    login: 'LOGIN',
  },
  routineReducers: (routines) => ({
    [routines.login.SUCCESS]: (state, action) => {
      state.user = action.user;
    },
  }),
});

export default sessionSlice;
