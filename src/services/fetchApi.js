import axios from "axios";

export function login(token) {
  const URL = 'http://localhost:3001/login';
  const obj = {
    token,
  };
  return axios.post(URL, obj).then((res) => res.data);
}

export function saveTasks(tasks) {
  const URL = 'http://localhost:3001/login';
  const obj = {
    tasks,
  };
  return axios.post(URL, obj).then((res) => res.data);
}