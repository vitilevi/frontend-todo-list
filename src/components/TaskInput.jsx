import React, { useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';
import { saveTasks } from '../services/fetchApi';

export default function TaskInput() {
  const {
    tasks,
    setTasks,
    token,
  } = useContext(TaskContext);

  const [localTask, setLocalTask] = useState('');

  const handleChange = ({ target: { value } }) => {
    setLocalTask(value);
  }

  const handleSubmit = async () => {
    const data = new Date();
    const dia  = data.getDate().toString().padStart(2, '0');
    const mes  = (data.getMonth()+1).toString().padStart(2, '0');
    const ano  = data.getFullYear();
    const formattedDate = `${dia}/${mes}/${ano}`;
    const task = {
      name: localTask,
      date: formattedDate,
      status: 'em andamento',
    }
    await saveTasks(token, task);
    setTasks([...tasks, task]);
    setLocalTask('');
  };

  return (
    <>
      <input
        className="task-input"
        type="text"
        value={ localTask }
        name="task-input"
        onChange={ handleChange }
      />
      <button
        className="ms-3 rounded-circle p-1 task-btn"
        onClick={ handleSubmit }
      >
        OK
      </button>
    </>
  )
}
