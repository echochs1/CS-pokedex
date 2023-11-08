import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Searchbar from './components/Searchbar.jsx';
import Pokemon from './pages/Pokemon.jsx';
import NotFound from './pages/NotFound.jsx';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';

const App = () => {
  // const [pokemon, setPokemon] = useState('Pachirisu');
  // probably wont set state here but in searchbar.
  // The searchbar will then send the pokemon name state as a param in pokemon

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Searchbar />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/pokemon/:pokemonName' element={<Pokemon />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;