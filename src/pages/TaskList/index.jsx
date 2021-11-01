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
    <Container>
      fsdfsdfsdfs
      <GoogleLogout
        className="d-flex justify-content-center mx-auto my-5"
        clientId={ process.env.REACT_APP_CLIENT_ID }
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </Container>
  )
}
