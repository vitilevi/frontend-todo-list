import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../contexts/TaskContext';
import { deleteTask } from '../services/fetchApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import EditComponent from './EditComponent';

export default function Task({ task }) {
  const { tasks, setTasks, token } = useContext(TaskContext);

  const [editMode, setEditMode] = useState(false);
  const [color, setColor] = useState('#f1f1f1');
  const [textDecoration, setTextDecoration] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('rgba(50,50,50,.75)');

  useEffect(() => {
    if (task.status === 'em andamento') {
      setColor('#ffe73f');
      setTextDecoration('');
      setBackgroundColor('rgba(50,50,50,.75)');
    }
    if (task.status === 'pronto') {
      setColor('#51ffa1');
      setTextDecoration('line-through');
      setBackgroundColor('rgba(50,50,50,.20)');
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
    await deleteTask(token, task);
  };

  return editMode ? (
    <EditComponent task={task} editMode={editMode} setEditMode={setEditMode} />
  ) : (
    <div
      className='d-flex my-2 align-items-center justify-content-between task'
      style={{ backgroundColor }}>
      <span className='px-2' style={{ textDecoration }}>
        {task.name}
      </span>
      <div className='d-flex align-items-center justify-content-around'>
        <div className='d-flex flex-column'>
          <span className='px-2 ms-auto' style={{ color }}>
            <strong>{task.status}</strong>
          </span>
          <span className='px-2 ms-auto'>{task.date}</span>
        </div>
        <div className='mx-auto ms-2 d-flex flex-column align-items-center'>
          <FontAwesomeIcon
            icon={faEdit}
            className='icons my-1'
            onClick={() => setEditMode(!editMode)}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className='mx-2 icons my-1'
            onClick={handleDelete}
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
