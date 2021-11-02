import axios from "axios";

export function login(token) {
  const URL = 'http://localhost:3001/login';
  const obj = {
    token,
  };
  return axios.post(URL, obj).then((res) => res.data);
}

export function saveTasks(token, task) {
  const URL = 'http://localhost:3001/task';
  const obj = {
    token,
    task,
  };
  return axios.post(URL, obj).then((res) => res.data);
}