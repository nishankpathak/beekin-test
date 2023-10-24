import axios from '../../../../adapters/axios';

const register = async (userData: any) => {
  const response = await axios.post('signup', userData);

  return response.data;
};

const login = async (userData: any) => {
  const response = await axios.post('login', userData);

  if (response.data) {
    const persist_token = localStorage.getItem('remember_me');

    if (persist_token === 'true') {
      localStorage.setItem('token', response.data.token);
    } else {
      sessionStorage.setItem('token', response.data.token);
    }
  }

  return response.data.user;
};

const logout = async () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  window.location.reload();
};

const whoAmI = async () => {
  //get token from localstorage
  const persist_token = localStorage.getItem('remember_me');
  let token: any = '';

  if (persist_token === 'true') {
    token = localStorage.getItem('token');
  } else {
    token = sessionStorage.getItem('token');
  }
  if (token) {
    const response = await axios.get('whoAmI');
    return response.data;
  } else {
    throw Error();
  }
};

const authService = {
  register,
  login,
  logout,
  whoAmI,
};

export default authService;
