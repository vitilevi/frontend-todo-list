import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import TaskContext from '../contexts/TaskContext';
import { editTask } from '../services/fetchApi';

export default function EditComponent({ task, editMode, setEditMode }) {
  const { tasks, setTasks, token } = useContext(TaskContext);

  const [taskStatus, setStatus] = useState(task.status);
  const [taskName, setName] = useState(task.name);

  const handleEdit = async () => {
    const newTask = {
      name: taskName,
      date: task.date,
      status: taskStatus,
    };
    const indexOfTask = tasks.indexOf(task);
    tasks.splice(indexOfTask, 1, newTask);
    setEditMode(!editMode);
    setTasks([...tasks]);
    await editTask(token, tasks);
  };

  return (
    <Modal show={editMode} onHide={() => setEditMode(!editMode)}>
      <Modal.Body className='d-flex flex-column'>
        <div className='d-flex pt-3 mx-auto text-muted'>
          <p className='mx-2'>{task.name}</p>
          <p className='mx-2'>{task.status}</p>
          <p className='mx-2'>{task.date}</p>
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor='inputEdit' />
          <input
            className='my-2 form-control'
            id='inputEdit'
            value={taskName}
            type='text'
            onChange={({ target: { value } }) => setName(value)}
          />
          <select
            name='taskStatus'
            className='my-2 form-select'
            value={taskStatus}
            onChange={({ target: { value } }) => setStatus(value)}>
            <option value='pendente'>pendente</option>
            <option value='em andamento'>em andamento</option>
            <option value='pronto'>pronto</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => setEditMode(!editMode)}>
          Close
        </Button>
        <Button className='mx-2' onClick={handleEdit}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

EditComponent.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
};
