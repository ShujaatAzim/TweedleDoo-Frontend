import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

const LoginPage = () => {

  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = e => {
    e.preventDefault();
    let loginCredentials = {
      "username": email,
      "password": password
    }
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user: loginCredentials })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .then(() => setEmail(""))
    .then(() => setPassword(""))
  }

  return (
    <div>
      <h1>Log in!</h1>
      <div style={{ margin: "auto", width: "40%" }}>
        <Form onSubmit={e => handleLogin(e)}>
          <Form.Field>
            <label>Email</label>
            <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Field>
          <Button primary type="submit">Log In</Button>
        </Form>
      </div>
      <br />
      <br />
      <div>
        <h2>or, choose one of these options:</h2>
        <Button.Group>
          <Button type="button" primary onClick={() => history.push("/home")}>Home</Button>
          <Button.Or />
          <Button type="button" primary onClick={() => history.push("/about")}>About</Button>
          <Button.Or />
          <Button type="button" primary onClick={() => history.push("/register")}>Register</Button>
        </Button.Group>
      </div>
    </div>
  );
}

export default LoginPage;