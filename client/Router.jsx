import React from 'react';
import { useRoutes } from 'react-router-dom';
import Searchbar from './components/Searchbar.jsx';
import Pokemon from './pages/Pokemon.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const Router = () => {
  const element = useRoutes([
    { path: '/', element: <Searchbar/>},
    { path: '/about', element: <About/>},
    { path: '/pokemon/:pokemonName', element: <Pokemon/>},
    { path: 'login', element: <Login/>},
    { path: 'signup', element: <Signup/>},
    { path: '*', element: <NotFound/>},
  ]);

  return element;
};

export default Router;