import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function EditTask({ task, editMode, setEditMode }) {
  const [taskName, setTaskName] = useState(task.name);
  const [taskStatus, setTaskStatus] = useState(task.status);
  const [taskDate, setTaskDate] = useState(task.date);
  const [editTaskMode, setEditTaskMode] = useState(editMode)

  const handleEdit = () => {

  }

  return (
    <Modal show={editMode} onHide={() => setEditMode(!editMode)}>
      <Modal.Header closeButton>
        <Modal.Title>Editar tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <input
          className="m-2"
          type="text"
          placeholder="Tarefa"
          value={ taskName }
          onChange={ ({ target: { value } }) => setTaskName(value) }
        />
        <select
          name="taskStatus"
          className="m-2"
          value={ taskStatus }
          onChange={ ({ target: { value } }) => setTaskStatus(value) }
        >
          <option value="pendente">pendente</option>
          <option value="em andamento">em andamento</option>
          <option value="pronto">pronto</option>
        </select>
        <input
          className="m-2"
          type="date"
          value={ taskDate.split('/').reverse().join('-') }
          name="taskDate"
          onChange={ handleDate }
        />
        <Button
          className="m-2"
          onClick={ handleEdit }
        >
          Editar
        </Button>
      </Modal.Body>
    </Modal>
  )
}
