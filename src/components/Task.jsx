import React, { useContext, useState, useEffect } from 'react';
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
  const [color, setColor] = useState('#f1f1f1');
  const [textDecoration, setTextDecoration] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('rgba(50,50,50,.85)');

  useEffect(() => {
    if (task.status === 'em andamento') {
      setColor('#ffe73f');
      setTextDecoration('');
      setBackgroundColor('rgba(50,50,50,.85)');
    }
    if (task.status === 'pronto') {
      setColor('#51ffa1');
      setTextDecoration('line-through');
      setBackgroundColor('rgba(50,50,50,.25)');
    }
    if (task.status === 'pendente') {
      setColor('#f1f1f1');
      setTextDecoration('');
      setBackgroundColor('rgba(50,50,50)');
    }
  }, [task.status]);

  const handleDelete = async () => {
    const filtered = tasks.filter((el) => el !== task);
    setTasks(filtered);
    console.log(token);
    await deleteTask(token, task);
  }

  const handleEdit = async (name, status) => {
    const newTask = {
      name ,
      date: task.date,
      status: status === task.status? 'pendente' : status,
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
    return (
      <Modal show={ editMode } onHide={ () => setEditMode(!editMode) }>
        <Modal.Body className="d-flex flex-column">
          <div className="d-flex pt-3 mx-auto text-muted">
            <p className="mx-2">{ task.name }</p>
            <p className="mx-2">{ task.status }</p>
            <p className="mx-2">{ task.date }</p>
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="inputEdit" />
            <input
              className="my-2 form-control"
              id="inputEdit"
              placeHolder={ task.name }
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
            {/* <label htmlFor="dateEdit" />
            <input
              className="my-2 form-control"
              type="date"
              id="dateEdit"
              name="taskDate"
              placeholder={ task.date }
              onChange={ ({ target: { value } }) => date = value }
            /> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ () => setEditMode(!editMode) }>
            Close
          </Button>
          <Button
            className="mx-2"
            onClick={ () => handleEdit(name, status) }
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } 

  return ( editMode? <EditComponent /> :
    <div className="d-flex my-2 align-items-center justify-content-between task" style={ { backgroundColor } }>
      <span className="px-2" style={ { textDecoration } }>{ task.name }</span>
      <div className="d-flex align-items-center justify-content-around">
        <div className="d-flex flex-column">
          <span className="px-2 ms-auto" style={ { color } }><strong>{ task.status }</strong></span>
          <span className="px-2 ms-auto">{ task.date }</span>
        </div>
        <div className="mx-auto ms-2 d-flex flex-column align-items-center">
          <FontAwesomeIcon
            icon={ faEdit }
            className="icons my-1"
            onClick={ () => setEditMode(!editMode) }
          />
          <FontAwesomeIcon 
            icon={ faTrashAlt }
            className="mx-2 icons my-1"
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