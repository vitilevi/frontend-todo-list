import React, { useState, useEffect } from 'react'
import TaskContext from './TaskContext';
import { saveTasks } from '../services/fetchApi';

export default function TaskProvider({ children }) {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const saveNewTasks = async () => {
      await saveTasks(tasks);
    }
    saveNewTasks();
  }, [tasks]);

  const context = {
    isUserLogged,
    tasks,
    token,
    setIsUserLogged,
    setTasks,
    setToken,
  }

  return (
    <TaskContext.Provider value={ context }>
      { children }
    </TaskContext.Provider>
  )
}
