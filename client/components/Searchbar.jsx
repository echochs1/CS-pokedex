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
  <div>
    <h2>This will be the Home Page with a searchbar to search pokemon</h2>
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