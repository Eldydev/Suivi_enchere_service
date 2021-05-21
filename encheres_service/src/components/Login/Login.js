import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';
import Logo from "../../images/1.png";




async function loginUser(credentials) {
  return fetch('//https://api.suivi-encheres-services.fr/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
        <img style={style.Logo} src={Logo} alt="website logo" />
        <form onSubmit={handleSubmit}>
          <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div className="login-button">
              <button type="submit">Submit</button>
          </div>
        </form>
    </div>
  )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

const style = {
  Logo: {
      margin: '50px',
      height: '250px',
      witdh: '250px'
  }
}
