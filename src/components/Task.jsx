import React, { useContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../contexts/TaskContext';
import { Modal, Button } from 'react-bootstrap';
import { deleteTask, editTask } from '../services/fetchApi';

export default function Task({ task }) {
  const {
    tasks,
    setTasks,
    token,
  } = useContext(TaskContext);

  const [editMode, setEditMode] = useState(false);
  // const [taskName, setTaskName] = useState(task.name);
  // const [taskStatus, setTaskStatus] = useState(task.status);
  // const [taskDate, setTaskDate] = useState(task.date);
  // const taskRef = useRef();

  const handleDelete = async () => {
    const filtered = tasks.filter((el) => el !== task);
    setTasks(filtered);
    console.log(token);
    await deleteTask(token, task);
  }

  const handleEdit = async (name, status, unformatedDate) => {
    const date = unformatedDate.split('-').reverse().join('/');
    setEditMode(!editMode);
    const newTask = {
      name ,
      date,
      status,
    }
    const indexOfTask = tasks.indexOf(task);
    console.log(tasks)
    tasks.splice(indexOfTask, 1, newTask);
    setTasks([...tasks]);
    await editTask(token, tasks)
  }

  // const handleDate = ({ target: { value } }) => {
  //   const date = value
  //   console.log(date)
  //   setTaskDate(date);
  // }

  const EditComponent = () => {
    let name = task.name;
    let status = task.status;
    let date = task.date;
    return (
      <Modal show={ editMode }>
        <Modal.Body className="d-flex flex-column">
          <h3 className="text-center">Tarefa</h3>
          <div className="d-flex mx-auto">
            <p className="mx-2">{ task.name }</p>
            <p className="mx-2">{ task.status }</p>
            <p className="mx-2">{ task.date }</p>
          </div>
          <div className="d-flex flex-column">
            <input
              className="my-2"
              type="text"
              onChange={ ({ target: { value } }) => name = value }
            />
            <select
              name="taskStatus"
              className="my-2"
              onChange={ ({ target: { value } }) => status = value }
            >
              <option value="pendente">pendente</option>
              <option value="em andamento">em andamento</option>
              <option value="pronto">pronto</option>
            </select>
            <input
              className="my-2"
              type="date"
              name="taskDate"
              placeholder={ task.date }
              onChange={ ({ target: { value } }) => date = value }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ () => setEditMode(!editMode) }>
            Close
          </Button>
          <Button
            className="mx-2"
            onClick={ () => handleEdit(name, status, date) }
          >
            Editar
          </Button>
        </Modal.Footer>
      </Modal>
    )

    // return (
    //   <div className="d-flex my-5 align-items-center">
    //     <input
    //       className="mx-2"
    //       type="text"
    //       // ="Tarefa"
    //       placeholder={ taskName }
    //       onChange={ ({ target: { value } }) => name = value }
    //     />
    //     <select
    //       name="taskStatus"
    //       className="mx-2"
    //       placeholder={ status }
    //       onChange={ ({ target: { value } }) => status = value }
    //     >
    //       <option value="pendente">pendente</option>
    //       <option value="em andamento">em andamento</option>
    //       <option value="pronto">pronto</option>
    //     </select>
    //     <input
    //       className="mx-2"
    //       type="date"
    //       value={ taskDate.split('/').reverse().join('-') }
    //       name="taskDate"
    //       onChange={ handleDate }
    //     />
    //     <button
    //       className="mx-2"
    //       onClick={ () => handleEdit(name) }
    //     >
    //       Editar
    //     </button>
    //   </div>
    // );
  } 

  return ( editMode? <EditComponent /> :
    <div className="d-flex my-5 align-items-center justify-content-between">
      <input type="checkbox" className="mx-2" />
      <span className="px-2">{ task.name }</span>
      <span className="px-2">{ task.status }</span>
      <span className="px-2">{ task.date }</span>
      <div>
        <button
          onClick={ () => setEditMode(!editMode) }
        >
          Editar
        </button>
        <button
          className="px-2"
          onClick={ handleDelete }
        >
          Delete
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