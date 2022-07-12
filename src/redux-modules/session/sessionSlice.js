import createSliceWithRoutines from 'redux-modules/utils/createSliceWithRoutines';

const sessionSlice = createSliceWithRoutines({
  name: 'session',
  initialState: {
    user: {},
    userSettings: {
      habitIds: [],
      habitViewType: 'week'
    },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
    },
    setUserSettings: (state, action) => {
      state.userSettings = { ...state.userSettings, ...action.payload.userSettings };
    },
  },
  routines: {
    login: 'LOGIN',
    logout: 'LOGOUT',
    createUser: 'CREATE_USER',
    updateHabitViewType: 'UPDATE_HABIT_VIEW_TYPE',
  },
  routineReducers: (routines) => ({
    [routines.logout.SUCCESS]: (state) => {
      state.user = {};
    },
    [routines.login.SUCCESS]: (state, action) => {
      state.user = action.payload.user;
    },
    [routines.createUser.SUCCESS]: (state, action) => {
      state.user = action.payload.user;
    },
    [routines.updateHabitViewType.SUCCESS]: (state, action) => {
      state.userSettings.habitViewType = action.payload.habitViewType;
    }
  }),
});

export default sessionSlice;
