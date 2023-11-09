import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Searchbar from './components/Searchbar.jsx';
import Pokemon from './pages/Pokemon.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Hidden from './pages/Hidden.jsx';

const Router = () => {
  const [ssid, setSsid] = useState({});
  const element = useRoutes([
    { path: '/', element: <Searchbar/>},
    { path: '/about', element: <About/>},
    { path: '/pokemon/:pokemonName', element: <Pokemon/>},
    { path: 'login', element: <Login ssid={ssid}/>},
    { path: 'signup', element: <Signup ssid={ssid} setSsid={setSsid}/>},
    { path: 'hidden', element: <Hidden ssid={ssid}/>},
    { path: '*', element: <NotFound/>},
  ]);

  return element;
};

export default Router;