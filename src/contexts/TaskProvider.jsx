import React, { useState } from 'react';
import TaskContext from './TaskContext';

export default function TaskProvider({ children }) {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  const context = {
    isUserLogged,
    tasks,
    token,
    user,
    setIsUserLogged,
    setTasks,
    setToken,
    setUser,
  };

  return (
    <TaskContext.Provider value={ context }>
      { children }
    </TaskContext.Provider>
  );
}
