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
    setUser,
  } = useContext(TaskContext);
  
  const onSuccess = async (res) => {
    console.log('succeed')
    const { tokenId } = res;
    const dbRequest = await login(tokenId);
    if (dbRequest.error) alert('Usuário ou senha incorretos');
    setUser(dbRequest);
    setTasks(dbRequest.tasks);
    setToken(tokenId);
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
    <Container className="login-container pt-5">
      <div className="mx-auto text-center login-box">
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
      </div>
    </Container>
  );
}
