import React, { useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';
import { saveTask } from '../services/fetchApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

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
    if (localTask === '') return alert('Insira uma tarefa');
    const data = new Date();
    const dia  = data.getDate().toString().padStart(2, '0');
    const mes  = (data.getMonth()+1).toString().padStart(2, '0');
    const ano  = data.getFullYear();
    const formattedDate = `${dia}/${mes}/${ano}`;
    const task = {
      name: localTask,
      date: formattedDate,
      status: 'pendente',
    }
    await saveTask(token, task);
    setTasks([...tasks, task]);
    setLocalTask('');
  };

  return (
    <>
      <input
        className="task-input form-control"
        id="input"
        type="text"
        value={ localTask }
        name="task-input"
        onChange={ handleChange }
      />
      <label htmlFor="input" className="form-label" />
      <FontAwesomeIcon
        icon={ faCheckSquare }
        size="4x"
        className="mx-3 p-2 icons"
        onClick={ handleSubmit }
      />
    </>
  )
}
