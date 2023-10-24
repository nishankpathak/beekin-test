import axios from '../.././../../adapters/axios';

export const httpGetCompanies = async () => {
  const response = await axios.get('companies');
  return await response.data;
};

export const httpPostCompany = async (company: any) => {
  const response = await axios.post('companies', company);
  return response.data;
};
