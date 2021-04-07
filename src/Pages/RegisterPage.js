import React, { useState } from 'react';

const RegisterPage = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e, username, password) => {
    e.preventDefault();
    let newUser = { 
      "user": {
       "username": username, 
       "password": password 
      }
    }
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .then(() => setUsername(""))
    .then(() => setPassword(""))
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, username, password)}>
        <label>Email</label>
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterPage;