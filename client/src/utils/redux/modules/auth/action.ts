import {createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

export const register = createAsyncThunk(
  'auth/register',
  async (user: any, thunkAPI) => {
    try {
      const newUser = await authService.register(user);
      // Dispatch thunk actions like
      // thunkAPI.dispatch<any>GET_METHOD_NAME())
      return newUser;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (
    user: {email: string; password: string},
    {dispatch, rejectWithValue},
  ) => {
    try {
      const response = await authService.login(user);
      // get all details from api on successful login
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const whoAmI = createAsyncThunk(
  'auth/whoami',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      const response = await authService.whoAmI();
      // Dispatch thunk actions like
      // dispatch<any>(GET_METHOD_NAME())
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
