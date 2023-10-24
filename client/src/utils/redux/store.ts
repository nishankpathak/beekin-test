import {
  Action,
  ThunkAction,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {RootState} from './utils/type';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {},
  middleware,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
