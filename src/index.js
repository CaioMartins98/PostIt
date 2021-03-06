import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalcss';
import { BrowserRouter as Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from '../src/views/Login/Login';
import Cadastro from '../src/views/Cadastro/Cadastro';
import Dashboard from '../src/views/Dashboard/Dashboard';
import ForgotPassword from '../src/views/ForgotPassword/ForgotPassword';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" render={(props) => <LoginScreen {...props} />}></Route>
      <Route path="/cadastro" render={(props) => <Cadastro {...props} />}></Route>
      <Route path="/dashboard" render={(props) => <Dashboard {...props} />}></Route>
      <Route path="/recuperar-senha" render={(props) => <ForgotPassword {...props} />}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
