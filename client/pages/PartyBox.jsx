import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard.jsx";

const PartyBox = ({ ssid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [box, setBox] = useState([]);

  if (!ssid) {
    return (
      <Navigate to='/login' replace/>
    );
  }

  useEffect(() => {
    console.log('in PartyBox useEffect');
    console.log('here is ssid, ', ssid);
    setIsLoading(true);
    fetch('/box/getBoxData', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON'
      },
      body: JSON.stringify({ ssid })
    })
      .then(res => res.json())
      .then(res => {
        console.log('received from /box', res.box);
        setBox(res.box);
        setIsLoading(false);
      })
      .catch(err => console.log('Error in get request to /box'));
  }, [])

  const pokemonCards = [];
  if (!isLoading) {
    for (let i = 0; i < box.length; i++) {
      pokemonCards.push(<PokemonCard pokemonData={box[i]}/>);
    }
  }

  console.log('this is boxboxbox', box);
  if (isLoading) {
    return (
      <div>
        <p>Fetching your pokemon...</p>
      </div>
    )
  }

  if (box[0] === undefined) {
    return (
      <div>
        <h1>Welcome to Your Box!</h1>
        <p>you have no pokemon</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Welcome to Your Box!</h1>
        <div className="cardContainer">
          {pokemonCards}
        </div>
      </div>
    );
  }
}

export default PartyBox;