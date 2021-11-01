import React, { useState, useEffect } from 'react'
import TaskContext from './TaskContext';
import { saveTasks } from '../services/fetchApi';

export default function TaskProvider({ children }) {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    const saveNewTasks = async () => {
      await saveTasks(token, tasks);
    }
    if (tasks.length !== 0) {
      saveNewTasks();
    }
  }, [tasks, token]);

  const context = {
    isUserLogged,
    tasks,
    token,
    user,
    setIsUserLogged,
    setTasks,
    setToken,
    setUser,
  }

  return (
    <TaskContext.Provider value={ context }>
      { children }
    </TaskContext.Provider>
  )
}
