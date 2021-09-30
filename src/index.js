import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { AuthContextProvider } from "./Context/AuthContext";
import { SocketContextProvider } from './Context/SocketContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/globals.css'
import './Styles/login.css'
ReactDOM.render(
  <AuthContextProvider>
    <SocketContextProvider>
      <Router />
    </SocketContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
