import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { BrowserRouter as Switch, Route, BrowserRouter } from 'react-router-dom';
// import Routes from '../src/routes';
import LoginScreen from '../src/views/Login/Login';
import Cadastro from '../src/views/Cadastro/Cadastro';
import Dashboard from '../src/views/Dashboard/Dashboard';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <LoginScreen {...props} />}></Route>
      <Route path="/cadastro" render={(props) => <Cadastro {...props} />}></Route>
      <Route path="/dashboard" render={(props) => <Dashboard {...props} />}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
