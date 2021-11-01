import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import TaskList from '../pages/TaskList';

export default function Routes() {
  return (
    <Switch>
      <Route exact path = "/" component = { Login } />
      <Route path="/taskList" component={ TaskList } />
    </Switch>
  )
}
