import axios from "axios";

export function login(token) {
  const URL = 'https://desafio-todo-list-backend.herokuapp.com/login';
  const obj = {
    token,
  };
  return axios.post(URL, obj).then((res) => res.data);
}

export function saveTask(token, task) {
  const URL = 'https://desafio-todo-list-backend.herokuapp.com/task';
  const obj = {
    token,
    task,
  };
  return axios.post(URL, obj).then((res) => res.data);
}

export function deleteTask(token, task) {
  const URL = 'https://desafio-todo-list-backend.herokuapp.com/task';
  const obj = {
    data: {
      token,
      task,
    },
  };
  return axios.delete(URL, obj).then((res) => res.data);
}

export function editTask(token, tasks) {
  const URL = 'https://desafio-todo-list-backend.herokuapp.com/task';
  const obj = {
    token,
    tasks,
  };
  return axios.put(URL, obj).then((res) => res.data);
}