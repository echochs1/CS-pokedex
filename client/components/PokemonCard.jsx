import React from 'react';

const PokemonCard = ({ pokemonData }) => {
  console.log('here is one pokemon data: ', pokemonData);
  return (
    <article className='charCard'>
    <div className='imgContainer'>
      <img className='charImg' src={pokemonData.gif} alt="" />
    </div>
    <ul className='cardList'>
      <li className='cardLi'>Pokemon: {pokemonData.name}</li>
      <li className='cardLi'>Level: {pokemonData.level}</li>
      <li className='cardLi'>Gender: {pokemonData.gender}</li>
      <li className='cardLi'>Ability: {pokemonData.ability}</li>
      <li className='cardLi'>Nature: {pokemonData.nature}</li>
      <li className='cardLi'>Item: {pokemonData.item}</li>
    </ul>
  </article>
  )
}

export default PokemonCard;