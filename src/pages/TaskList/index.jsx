import React, { useContext, useState, useEffect } from 'react';
import { Container, Toast } from 'react-bootstrap';
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
    user,
  } = useContext(TaskContext);

  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowCard(true)
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  const onSuccess = () => {
    console.log('Loged out successfuly')
    setIsUserLogged(false);
  }

  const redirectComponent = () => (
    <Redirect to="/" />
  );

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
      <div className="mx-auto mt-3 d-flex align-items-center">
        <TaskInput />
      </div>
      <div className="mx-auto">

      </div>
      <div className="mx-auto mt-3">
        {
          tasks.map((task, index) => <Task key={ index } task={ task } />)
        }
      </div>
      <div className="position-absolute bottom-0 end-0 m-5 me-5">
        <Toast className="toast" show={ showCard } onClose={ () => setShowCard(!showCard) }>
          <Toast.Header>
            <img src={ user.picture } className="rounded me-2" alt="Toast" />
            <strong className="me-auto">Olá, { user.name }</strong>
          </Toast.Header>
          <Toast.Body><strong>Como está o seu dia? #vqv</strong></Toast.Body>
        </Toast>
      </div>
    </Container>
  );
}
