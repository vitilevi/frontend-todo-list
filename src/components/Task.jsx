import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../contexts/TaskContext';
import { Modal, Button } from 'react-bootstrap';
import { deleteTask, editTask } from '../services/fetchApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Task({ task }) {
  const {
    tasks,
    setTasks,
    token,
  } = useContext(TaskContext);

  const [editMode, setEditMode] = useState(false);

  const handleDelete = async () => {
    const filtered = tasks.filter((el) => el !== task);
    setTasks(filtered);
    console.log(token);
    await deleteTask(token, task);
  }

  const handleEdit = async (name, status, unformatedDate) => {
    const date = unformatedDate.split('-').reverse().join('/');
    const newTask = {
      name ,
      date,
      status,
    };
    const indexOfTask = tasks.indexOf(task);
    console.log(tasks);
    tasks.splice(indexOfTask, 1, newTask);
    setEditMode(!editMode);
    setTasks([...tasks]);
    await editTask(token, tasks)
  }

  const EditComponent = () => {
    let name = task.name;
    let status = task.status;
    let date = task.date;
    return (
      <Modal show={ editMode } onHide={ () => setEditMode(!editMode) }>
        <Modal.Body className="d-flex flex-column">
          <div className="d-flex pt-3 mx-auto text-muted">
            <p className="mx-2">{ task.name }</p>
            <p className="mx-2">{ task.status }</p>
            <p className="mx-2">{ task.date }</p>
          </div>
          {/* <h3 className="text-center">Tarefa</h3> */}
          <div className="d-flex flex-column">
            <label htmlFor="inputEdit" />
            <input
              className="my-2 form-control"
              id="inputEdit"
              type="text"
              onChange={ ({ target: { value } }) => name = value }
            />
            <select
              name="taskStatus"
              className="my-2 form-select"
              onChange={ ({ target: { value } }) => status = value }
            >
              <option value="pendente">pendente</option>
              <option value="em andamento">em andamento</option>
              <option value="pronto">pronto</option>
            </select>
            <label htmlFor="dateEdit" />
            <input
              className="my-2 form-control"
              type="date"
              id="dateEdit"
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
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } 

  return ( editMode? <EditComponent /> :
    <div className="d-flex my-2 align-items-center justify-content-between task">
      <span className="px-2">{ task.name }</span>
      <div className="d-flex align-items-center">
        <div className="d-flex flex-column">
          <span className="px-2 mx-auto"><strong>{ task.status }</strong></span>
          <span className="px-2">{ task.date }</span>
        </div>
        <div className="mx-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={ faEdit }
            className="icons my-2"
            onClick={ () => setEditMode(!editMode) }
          />
          <FontAwesomeIcon 
            icon={ faTrashAlt }
            className="mx-2 icons"
            onClick={ handleDelete }
          />
        </div>
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