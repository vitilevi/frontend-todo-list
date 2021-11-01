import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';

export default function TaskList() {
  const [isUserLogedOut, setIsUserLogedOut] = useState(false);

  const onSuccess = () => {
    console.log('Loged out successfuly')
    setIsUserLogedOut(true);
  }

  const redirectComponent = () => {
    return (
      <Redirect to="/" />
    );
  }

  return ( isUserLogedOut? redirectComponent() :
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
        <input
          className="task-input"
          type="text"
        />
        <button className="ms-3 rounded-circle p-1 task-btn"> OK </button>
      </div>
    </Container>
  )
}
