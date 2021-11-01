import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import TaskProvider from './contexts/TaskProvider';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Routes />
      </TaskProvider>
    </div>
  );
}

export default App;
