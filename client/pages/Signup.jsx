import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //creds should be sessions in the future
  const [creds, setCreds] = useState({});
  const [userError,  setUserError] = useState(null);
  const [passwordError,  setPasswordError] = useState(null);

  function handleSignup() {
    console.log(creds);
    if (creds.username === '' || !creds.username) {
      setUserError('required');
    } else if (creds.password === '' || !creds.password) {
       setPasswordError('required')
    } else {
      const body = { username: creds.username, password: creds.password };
      //send request to server to add new user
      fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then((res)=> console.log('signup fetch:', res))
        .catch(err => console.log('error in signup fetch'))
    }
  }

  function handleUserChange(username) {
    setUserError(null);
    setCreds({...creds, username})
  }

  function handlePasswordChange(password) {
    setPasswordError(null);
    setCreds({...creds, password})
  }

  return (
    <div style={{ padding: 10 }}>
      <br/>
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
        <button onClick={handleSignup}>Sign up</button>
    </div>
  );
}

export default Signup;