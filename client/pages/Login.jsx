import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ ssid }) => {
  //creds should be sessions in the future
  // const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    // if(creds.username === 'admin' && creds.password === '123') {
    //   onLogin && onLogin({username: creds.username});
    //   navigate('/hidden');
    // }
  }

  return (
    <div style={{ padding: 10 }}>
      <h2>Log in</h2>
      <span>Username:</span><br/>
      <input
        type="text"
        /><br/>
      <span>Password:</span><br/>
      <input
        type="password"
        /><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;