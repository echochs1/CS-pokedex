import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ ssid, setSsid }) => {
  const [creds, setCreds] = useState({});
  const [userError,  setUserError] = useState(null);
  const [passwordError,  setPasswordError] = useState(null);
  const navigate = useNavigate();

  function handleUserChange(username) {
    setUserError(null);
    setCreds({...creds, username})
  }

  function handlePasswordChange(password) {
    setPasswordError(null);
    setCreds({...creds, password})
  }

  function handleLogin() {
    console.log(creds);
    if (creds.username === '' || !creds.username) {
      setUserError('required');
    } else if (creds.password === '' || !creds.password) {
       setPasswordError('required')
    } else {
      const body = { username: creds.username, password: creds.password };
      //send request to server to add new user
      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then((res)=> res.json())
        .then((res) => {
          console.log('From fetch login, setting ssidState with', res);
          setSsid(res);
          console.log('setSsid complete');
          navigate('/partyBox');
        })
        .catch(err => console.log('error in signup fetch'))
    }
  }

  function handleLogout() {
    console.log('ssid in handleLogout', ssid);
    if (!Array.isArray(ssid)) {
      fetch('/auth/logout', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/JSON'
        },
        body: JSON.stringify({ssid})
      })
        .then((res)=> res.json())
        .then((res) => {
          console.log('From fetch logout, setting ssidState with', res);
          setSsid([]);
          console.log('setSsid complete empty');
          navigate('/');
        })
        .catch(err => console.log('error in signup fetch'))
    }
  }

  return (
    <div style={{ padding: 10 }}>
      <h2>Log in</h2>
      <span>Username:</span>
      <br/>
        <input type="text" onChange={(e) => handleUserChange(e.target.value)}/>
          {userError ? (<span className="errorMsg">{userError}</span>) : null}
      <br/>
        <span>Password:</span>
      <br/>
        <input type="password" onChange={(e) => handlePasswordChange(e.target.value)}/>
        {passwordError ? (<span className="errorMsg">{passwordError}</span>) : null}
      <br/><br/>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Login;