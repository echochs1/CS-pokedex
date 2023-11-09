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
      <div>
        <div className='pokeImage'>
        <img src={`https://projectpokemon.org/images/sprites-models/bw-animated/${(pokemonId)}.gif`} alt="" />
        </div>
        <p>Pokemon: {pokemonName}</p>
        {!Array.isArray(ssid) ? <AddToBox pokemonData={pokemonData} ssid={ssid} pokeGif={`https://projectpokemon.org/images/sprites-models/bw-animated/${(pokemonId)}.gif`}/> : null}
      </div>
    )
  }
}

export default Pokemon;