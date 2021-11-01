import React, { useState } from 'react'
import TaskContext from './TaskContext';

export default function TaskProvider({ children }) {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState('');

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
