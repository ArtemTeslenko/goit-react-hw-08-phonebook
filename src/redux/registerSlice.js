import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.tocken = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.tocken = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});
// export const { registrateUser } = authSlice.actions;
