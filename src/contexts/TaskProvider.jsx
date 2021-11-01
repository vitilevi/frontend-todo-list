import React, { useState } from 'react'
import TaskContext from './TaskContext';

export default function TaskProvider({ children }) {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [tasks, setTasks] = useState([]);

  const context = {
    isUserLogged,
    tasks,
    setIsUserLogged,
    setTasks,
  }

  return (
    <TaskContext.Provider value={ context }>
      { children }
    </TaskContext.Provider>
  )
}
