import axios from 'axios';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const BASE_URL = import.meta.env.VITE_API_URL;
// export const BASE_URL = `${BASE_URI}/api/v1`;
// console.log('BASE_URI:::', BASE_URI);
// console.log(
//   'ENVS:::import.meta.env.VITE_NODE_ENV',
//   import.meta.env.VITE_NODE_ENV
// );
// console.log(
//   'ENVS:::import.meta.env.VITE_API_URL',
//   import.meta.env.VITE_API_URL
// );
const instance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

export default instance;
