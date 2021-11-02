import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../contexts/TaskContext';
import { deleteTask } from '../services/fetchApi';

export default function Task({ task }) {
  const {
    tasks,
    setTasks,
    token,
  } = useContext(TaskContext);

  const [editMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [taskStatus, setTaskStatus] = useState(task.status);
  const [taskDate, setTaskDate] = useState(task.date);

  const handleDelete = async () => {
    const filtered = tasks.filter((el) => el !== task);
    setTasks(filtered);
    console.log(token);
    await deleteTask(token, task);
  }

  const handleEdit = async () => {
    const newTask = {
      name: taskName,
      date: taskDate,
      status: taskStatus,
    }
    const indexOfTask = tasks.indexOf(task);
    console.log(tasks)
    tasks.splice(indexOfTask, 1, newTask);
    setTasks(tasks);
    setEditMode(!editMode);
  }

  const handleDate = ({ target: { value } }) => {
    const date = value.split('-').reverse().join('/');
    console.log(date)
    setTaskDate(date);
  }

  const EditComponent = () => (
    <div className="d-flex my-5 align-items-center">
      <input
        type="text"
        placeholder="Tarefa"
        value={ taskName }
        onChange={ ({ target: { value } }) => setTaskName(value) }
      />
      <select name="taskStatus" onChange={ ({ target: { value } }) => setTaskStatus(value) }>
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="pronto">pronto</option>
      </select>
      <input
        type="date"
        name="taskDate"
        onChange={ handleDate }
      />
      <button
        onClick={ handleEdit }
      >
        Editar
      </button>
    </div>
  );

  return ( editMode? <EditComponent /> :
    <div className="d-flex my-5 align-items-center justify-content-between">
      <input type="checkbox" className="mx-2" />
      <span className="px-2">{ task.name }</span>
      <span className="px-2">{ task.status }</span>
      <span className="px-2">{ task.date }</span>
      <div>
        <button
          className="px-2"
          onClick={ handleDelete }
        >
          Delete
        </button>
        <button
          onClick={ () => setEditMode(!editMode) }
        >
          Editar
        </button>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.string,
  }),
};