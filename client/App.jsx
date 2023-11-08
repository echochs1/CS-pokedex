import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Router from './Router.jsx';

const App = () => {
  // const [pokemon, setPokemon] = useState('Pachirisu');
  // probably wont set state here but in searchbar.
  // The searchbar will then send the pokemon name state as a param in pokemon

  // const [user, setUser] = useState();
  // const navigate = useNavigate();

  // function logOut() {
  //   setUser(null);
  //   navigate("/");
  // }

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App;