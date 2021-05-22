import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import HighfieldFrontend from './components/HighfieldFrontend';

import "./assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap";
import { UserProvider } from './controllers/UserController';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <HighfieldFrontend/>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);