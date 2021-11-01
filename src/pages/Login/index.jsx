import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import TaskContext from '../../contexts/TaskContext';
import { login } from '../../services/fetchApi';

export default function Login() {
  const {
    isUserLogged,
    setIsUserLogged,
    setToken,
    setTasks,
  } = useContext(TaskContext);
  
  const onSuccess = async (res) => {
    console.log('succeed')
    const { tokenId } = res;
    setToken(tokenId);
    const dbRequest = await login(tokenId);
    setTasks(dbRequest.tasks);
    setIsUserLogged(true);
    }
  
  const onFailure = (res) => {
    console.log('failed', res)
    setIsUserLogged(false);
  }

  const redirectComponent = () => {
    return (
      <Redirect to="/taskList" />
    );
  }

  return ( isUserLogged? redirectComponent() : 
    <Container className="login-container">
      <div className="p-5 d-flex flex-column mx-auto text-center login-box">
        <h2 className="">Login</h2>
        <GoogleLogin
          className="mt-4 mb-1 mx-auto google-btn"
          clientId={ process.env.REACT_APP_CLIENT_ID }
          buttonText="Faça login"
          onSuccess={ onSuccess }
          onFailure={ onFailure }
          cookiePolicy={ 'single_host_origin' }
          isSignedIn={ true }
        />
        <span className="or">Ou</span>
        <GoogleLogin
            className="mt-1 mx-auto google-btn"
            clientId={ process.env.REACT_APP_CLIENT_ID }
            buttonText="Cadastre-se"
            onSuccess={ onSuccess }
            onFailure={ onFailure }
            cookiePolicy={ 'single_host_origin' }
            isSignedIn={ true }
          />
      </div>
    </Container>
  );
}
