import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as base64 from "byte-base64";

const ImageToByteArray = ({ pokemonData, ssid, pokeGif }) => {
  const [click, setClick] = useState(true);
  const [level, setLevel] = useState(100);
  const [gender, setGender] = useState('Male');
  const [ability, setAbility] = useState(pokemonData.abilities[0].ability.name);
  const [nature, setNature] = useState('Docile');
  const [item, setItem] = useState('none');
  const [image, setImage] = useState([]);
  const [byte, setByte] = useState([]);
  const [show, setShow] = useState([]);
  const navigate = useNavigate();

  // console.log('received pokemonData: ', pokemonData);
  // console.log('pokemon default ability', pokemonData.abilities[0].ability.name);

  const renderForm = () => {
    setClick(false);
  }

  const backToImage = () => {
    console.log('byte', byte);
    // const blob = new Blob(byte, { type: 'image/png' }); // Adjust the 'type' based on your image format

    // Create a URL for the Blob
    // const imageUrl = URL.createObjectURL(blob);
    const imageBase64 = base64.bytesToBase64(byte);
    const imageUrl = "data:image/png;base64," + imageBase64;
    // "data:image/png;base64," + yourByteArrayAsBase64;
    setShow(<img src={imageUrl} alt="heyyy"></img>)
  }

  const submitImage = () => {
    console.log('e:', image);
    console.log('e.target:', image.target);
    console.log('e.target.files[0]:', image.target.files[0]);
    const file = image.target.files[0];

    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = function () {
        // Convert the result to a Uint8Array
        const byteArray = new Uint8Array(reader.result);
  
        // Now you have the image data in the 'byteArray'
        console.log(byteArray);
        setByte(byteArray);
      };
  
      // Read the image file as an ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
  }

  const submitPokemon = () => {
    const body = {
      ssid,
      name: pokemonData.name,
      level,
      gender,
      ability,
      nature,
      item,
      gif: pokeGif
    }

    fetch('/box/addToBox', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('addPokemon sent this response from server', res);
        navigate('/partyBox');
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
      <input type="file" id="imageInput" accept="image/*" onChange={e => setImage(e)}></input>
      <button onClick={submitImage}>Add Image</button>
      {show}
      <button onClick={backToImage}>show Image</button>

    </div>
  )

}

export default ImageToByteArray;