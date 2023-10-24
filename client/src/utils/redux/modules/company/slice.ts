import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {enableMapSet} from 'immer';
import {Company, RootState} from '../../utils/type';

enableMapSet();
// const initialState: RootState["company"] = new Map([]);

const initialState: RootState['company'] = {
  status: 'idle',
  message: '',
  map: new Map<string, Company>(),
};

export const company = createSlice({
  name: 'company',
  initialState,
  reducers: {
    updateCompanyDetails: (state, action: PayloadAction<Company>) => {
      state.map.set(action.payload.id.toString(), action.payload);
    },

    clearCompanyDetails: state => {
      state.map.clear();
    },
  },
});

export default company.reducer;

export const {updateCompanyDetails, clearCompanyDetails} = company.actions;
