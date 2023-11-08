import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Searchbar from './components/Searchbar.jsx';
import Pokemon from './pages/Pokemon.jsx';
import NotFound from './pages/NotFound.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  // const [pokemon, setPokemon] = useState('Pachirisu');
  // probably wont set state here but in searchbar.
  // The searchbar will then send the pokemon name state as a param in pokemon

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Searchbar}/>
        <Route path='/pokemon/:pokemonName' Component={Pokemon}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </>
  )
}

export default App;