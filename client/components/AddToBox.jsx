import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddToBox = ({ pokemonData }) => {
  const [click, setClick] = useState(true);
  const [level, setLevel] = useState(100);
  const [gender, setGender] = useState('Male');
  const [ability, setAbility] = useState(pokemonData.abilities[0].ability.name);
  const [nature, setNature] = useState('Docile');
  const [item, setItem] = useState('none');
  const navigate = useNavigate();

  // console.log('received pokemonData: ', pokemonData);
  // console.log('pokemon default ability', pokemonData.abilities[0].ability.name);

  const renderForm = () => {
    setClick(false);
  }

  const submitPokemon = () => {
    const body = {
      name: pokemonData.name,
      level,
      gender,
      ability,
      nature,
      item
    }

    fetch('/addPokemon', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('addPokemon sent this response from server', res);
        navigate('/hidden');
      })
      .catch(err => console.log('error in addPokemon fetch'))
  }

  if (click) {
    return (
      <div>
        <button onClick={renderForm}>Add to Box</button>
      </div>
    )
  }

  return (
    <div>
        <label htmlFor="level">Level</label>
        <input type="number" name="level" id="level" min='1' max='100' value={level} onChange={(e) => setLevel(e.target.value)}/>
      <br />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      <br />
        <label htmlFor="ability">Ability</label>
        <input type="text" name="ability" id="ability" value={ability} onChange={(e) => setAbility(e.target.value)}/>
      <br />
        <label htmlFor="nature">Nature</label>
        <input type="text" name="nature" id="nature" value={nature} onChange={(e) => setNature(e.target.value)}/>
      <br />
        <label htmlFor="item">Item</label>
        <input type="text" name="item" id="item" value={item} onChange={(e) => setItem(e.target.value)}/>
      <br />
      <button onClick={submitPokemon}>Add Pokemon</button>
    </div>
  )

}

export default AddToBox;