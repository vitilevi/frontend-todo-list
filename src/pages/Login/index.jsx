import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
  const [isAuthorizedToRedirect, setIsAuthorizedToRedirect] = useState(false);
  
  const onSuccess = (res, props) => {
    console.log('succeed', res)
    console.log(props);
    setIsAuthorizedToRedirect(true);
    }
  
  const onFailure = (res) => {
    console.log('failed', res)
    setIsAuthorizedToRedirect(false);
  }

  const redirectComponent = () => {
    return (
      <Redirect to="/taskList" />
    );
  }

  return ( isAuthorizedToRedirect? redirectComponent() : 
    <Container>
      <Row>
        <GoogleLogin
          className="d-flex justify-content-center mx-auto my-5"
          clientId={ process.env.REACT_APP_CLIENT_ID }
          buttonText="Login"
          onSuccess={ (res) => onSuccess(res, props) }
          onFailure={ onFailure }
          cookiePolicy={ 'single_host_origin' }
          isSignedIn={ true }
        />
      </Row>
      <Row>
        <GoogleLogout
        className="d-flex justify-content-center mx-auto my-5"
          clientId={ process.env.REACT_APP_CLIENT_ID }
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </Row>
    </Container>
  )
}
