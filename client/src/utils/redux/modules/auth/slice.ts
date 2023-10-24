import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../utils/type';
import {login, logout, register, whoAmI} from './action';

const initialState: RootState['currentUser'] = {
  status: 'idle',
  message: '',
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.status = 'idle';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.status = 'loading';
      })

      .addCase(register.fulfilled, (state, action) => {
        state.status = 'success';
        state.message = 'User Created Successfully !';
      })

      .addCase(register.rejected, (state, action: any) => {
        state.status = 'failed'; // state.user = null
        if (action.payload.response?.data?.error?.code === 'ER_DUP_ENTRY') {
          state.message = 'Email Already Exists';
        } else {
          state.message = 'Something went wrong, Pleaese try again !';
        }
      })

      .addCase(login.pending, state => {
        state.status = 'loading';
      })

      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.status = 'success';
      })

      .addCase(login.rejected, (state, action: any) => {
        state.currentUser = null;
        state.message = 'invalid email or password';
        state.status = 'failed';
      })

      .addCase(logout.fulfilled, state => {
        state.currentUser = null;
      })

      .addCase(whoAmI.pending, state => {
        state.status = 'loading';
      })

      .addCase(whoAmI.fulfilled, (state, action: any) => {
        state.currentUser = action.payload;
        state.status = 'success';
      })

      .addCase(whoAmI.rejected, (state, action: any) => {
        state.status = 'failed';
      });
  },
});

export default authSlice.reducer;
export const {reset} = authSlice.actions;
