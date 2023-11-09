import React from 'react';

const PokemonCard = ({ pokemonData }) => {
  console.log('here is one pokemon data: ', pokemonData);
  return (
    <div>
      <img src={pokemonData.gif} alt="" />
      <p>Pokemon: {pokemonData.name}</p>
      <p>Level: {pokemonData.level}</p>
      <p>Gender: {pokemonData.gender}</p>
      <p>Ability: {pokemonData.ability}</p>
      <p>Nature: {pokemonData.nature}</p>
      <p>Item: {pokemonData.item}</p>
    </div>
  )
}

export default PokemonCard;