import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

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
      <h1>Register here!</h1>
      <div style={{ margin: "auto", width: "40%" }}>
        <Form onSubmit={e => handleSubmit(e, username, password)}>
          <Form.Field>
            <label>Email</label>
            <input type="text" placeholder="email" value={username} onChange={e => setUsername(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Field>
          <Button primary type="submit">Register</Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;