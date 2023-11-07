import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Searchbar from './components/Searchbar.jsx';
import Pokemon from './pages/Pokemon.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  // const [pokemon, setPokemon] = useState('Pachirisu');
  // probably wont set state here but in searchbar.
  // The searchbar will then send the pokemon name state as a param in pokemon

  return (
    <div>
      <h1>This is my App component</h1>
      {/* persisting navbar here */}
      <Routes>
        <Route path='/' Component={Searchbar}/>
        <Route path='/pokemon/:pokemonName' Component={Pokemon}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </div>
  )
}

export default App;