// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserReducer.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
