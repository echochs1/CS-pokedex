import React from 'react';

const PokemonCard = ({ pokemonData }) => {
  console.log('here is one pokemon data: ', pokemonData);
  return (
    <article className='charCard'>
    <div className='cardImg'>
      <img src={pokemonData.gif} alt="" />
    </div>
    <ul>
    <li>Pokemon: {pokemonData.name}</li>
      <li>Level: {pokemonData.level}</li>
      <li>Gender: {pokemonData.gender}</li>
      <li>Ability: {pokemonData.ability}</li>
      <li>Nature: {pokemonData.nature}</li>
      <li>Item: {pokemonData.item}</li>
    </ul>
  </article>
  )
}

export default PokemonCard;