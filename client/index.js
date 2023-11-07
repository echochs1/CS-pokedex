import React from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

render(
    // <BrowserRouter>
    // </BrowserRouter>
    <App/>,
    document.getElementById('app')
)