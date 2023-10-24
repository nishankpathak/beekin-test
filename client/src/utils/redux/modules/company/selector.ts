import {RootState} from '../../utils/type';

export const companySelector = (state: RootState) => state.company.map;
export const companyStatusSelector = (state: RootState) => state.company.status;
export const companyInfoSelector = (state: RootState) => state.company;
