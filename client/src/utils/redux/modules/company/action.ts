import {createAsyncThunk} from '@reduxjs/toolkit';
import {Company} from '../../utils/type';
import {httpGetCompanies, httpPostCompany} from './api';

export const getCompanies = createAsyncThunk(
  'company/getCompanies',
  async (_, thunkAPI) => {
    try {
      const companies: Company[] = await httpGetCompanies();
      return companies;
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  },
);

export const createCompany = createAsyncThunk(
  'company/create',
  async (companyData: Company, thunkAPI) => {
    try {
      const company: Company = await httpPostCompany(companyData);
      // thunkAPI.dispatch(getCompanyDetails(company.id));
      return company;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
