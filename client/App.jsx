import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Router from './Router.jsx';

const App = () => {
  const [ssid, setSsid] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar ssid={ssid}/>
        <Router ssid={ssid} setSsid={setSsid}/>
      </BrowserRouter>
    </>
  )
}

export default App;