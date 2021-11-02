import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import TaskContext from '../../contexts/TaskContext';
import TaskInput from '../../components/TaskInput';
import Task from '../../components/Task';

export default function TaskList() {
  const {
    isUserLogged,
    setIsUserLogged,
    tasks,
  } = useContext(TaskContext);

  const onSuccess = () => {
    console.log('Loged out successfuly')
    setIsUserLogged(false);
  }

  const redirectComponent = () => {
    return (
      <Redirect to="/" />
    );
  }

  return ( !isUserLogged? redirectComponent() :
    <Container className="py-5 d-flex flex-column">
      <div className="ms-auto">
        <GoogleLogout
          clientId={ process.env.REACT_APP_CLIENT_ID }
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </div>
      <div className="mx-auto">
        <h1>
          Todo list
        </h1>
      </div>
      <div className="mx-auto mt-3">
        <TaskInput />
      </div>
      <div className="mx-auto">
        {
          tasks.map((task) => <Task key={ task.name } task={ task } />)
        }
      </div>
    </Container>
  )
}
