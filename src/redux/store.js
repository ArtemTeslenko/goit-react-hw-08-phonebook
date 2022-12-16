import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { authSlice } from './registerSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
