import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
});

instance.interceptors.request.use((config: any) => {
  const token = getToken();

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

function getToken() {
  const isPersist = localStorage.getItem('remember_me');

  if (isPersist === 'true') {
    return localStorage.getItem('token');
  } else {
    return sessionStorage.getItem('token');
  }
}

export default instance;
