import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToBox from '../components/AddToBox.jsx';
import PokemonCard from '../components/PokemonCard.jsx';

const Pokemon = ({ ssid }) => {
  const { pokemonName } = useParams();
  console.log('ssid:', ssid);
  const [pokemonId, setPokemonId] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => res.json())
    .then(res => {
      setPokemonData(res);
      const id = res.id.toString();
      console.log('pokemonID:', res.id.toString())
      // if (id > 151) {
      //   console.log('Pokemon must be one of the original 151');
      //   throw new Error('Pokemon must be one of the original 151');
      // }
      if (id.length === 1) {
        setPokemonId('00' + id); 
      } else if (id.length === 2) {
        setPokemonId('0' + id);
      } else if (id.length < 1 || id.length > 3) {
        console.log('Error in fetch pokemon gif. Unaccounted ID number');
        throw new Error('Error in fetch pokemon gif. Unaccounted ID number');
      } else {
        setPokemonId(id);
      }
      console.log(pokemonId);
      setIsLoading(false);
    })
    .catch((err) => 'error in fetch');
  }, [])

  if (isLoading) {
    return (
      <div>
        <p>Fetching pokemon...</p>
      </div>
    )
  }
  else {
    return (
      <div className='searchDiv'>
        <div className='pokeImage'>
        <img src={`https://projectpokemon.org/images/sprites-models/bw-animated/${(pokemonId)}.gif`} alt="" />
        </div>
        {/* <p>Pokemon: {pokemonName}</p> */}
        <ul className='cardList'>
          <li className='cardLi'>Pokemon: {pokemonName}</li>
          <li className='cardLi'>Base HP: {pokemonData.stats[0].base_stat}</li>
          <li className='cardLi'>Base Attack: {pokemonData.stats[1].base_stat}</li>
          <li className='cardLi'>Base Defense: {pokemonData.stats[2].base_stat}</li>
          <li className='cardLi'>Base Special Attack: {pokemonData.stats[3].base_stat}</li>
          <li className='cardLi'>Base Special Defense: {pokemonData.stats[4].base_stat}</li>
          <li className='cardLi'>Base Speed: {pokemonData.stats[5].base_stat}</li> 
        </ul>
        {!Array.isArray(ssid) ? <AddToBox pokemonData={pokemonData} ssid={ssid} pokeGif={`https://projectpokemon.org/images/sprites-models/bw-animated/${(pokemonId)}.gif`}/> : null}
      </div>
    )
  }
  // else {
  //   return (
  //     <div className='searchDiv'> 
  //       <article className='charCard'>
  //   <div className='imgContainer'>
  //     <img className='charImg' src={`https://projectpokemon.org/images/sprites-models/bw-animated/${(pokemonId)}.gif`} alt="" />
  //   </div>
  //   <ul className='cardList'>
  //     <li className='cardLi'>Pokemon: {pokemonName}</li>
  //     {/* <li className='cardLi'>Base HP: {pokemonData.}</li>
  //     <li className='cardLi'>Base Attack: {pokemonData.gender}</li>
  //     <li className='cardLi'>Base Defense: {pokemonData.ability}</li>
  //     <li className='cardLi'>Base Special Attack: {pokemonData.nature}</li>
  //     <li className='cardLi'>Base Special Defense: {pokemonData.item}</li>
  //     <li className='cardLi'>Base Speed: {pokemonData.item}</li> */}
  //   </ul>
  // </article>
  //     </div>

  //   )
  // }
}

export default Pokemon;