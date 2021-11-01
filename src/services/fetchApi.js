import axios from "axios";

function login(token) {
  const URL = 'http://localhost:3001/login';
  const obj = {
    token,
  };
  return axios.post(URL, obj).then((res) => res.data);
}

export default login;