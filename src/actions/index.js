import axios from 'axios';
import { FETCH_USERS } from "./type";


const fakeJsonDataUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => {
  const response = axios.get(fakeJsonDataUrl);

  return {
    type: FETCH_USERS,
    payload: response
  };
};
