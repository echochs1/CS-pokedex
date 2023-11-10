import React, { useState, useEffect }  from 'react';
import { Link, withRouter, redirect } from 'react-router-dom';
// import { redirect } from "react-router-dom";


const Searchbar = () => {
  //USE STATE HERE
  const [pokemonName, setPokemonName] = useState([]);

  function autoFill(e) {
    // console.log(e.target.value);
    setPokemonName(e.target.value.toLowerCase());
  }

  return (
  <div className='searchDiv'>
    <h2 className='searchTitle'>Search Pokemon</h2>
    <input type="text" name="search" id="search" onChange={autoFill}/>
    <Link to={`/pokemon/${pokemonName}`}>
      <button
        type="button"
        className="btnSecondary"
      >
      to pokemon:
      </button>
    </Link>
  </div>
  )
}

export default Searchbar;