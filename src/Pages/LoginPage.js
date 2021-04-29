import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

const LoginPage = props => {

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
    .then(data => localStorage.setItem("dooCreds", JSON.stringify(data)))
    .then(() => props.setUser(JSON.parse(localStorage.getItem("dooCreds"))))
    .then(() => history.push('/profile'))
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
          <Button className="blue-button" type="submit">Log In</Button>
        </Form>
      </div>
      <br />
      <br />
      <div>
        <h3>Or sign up! It's free!</h3>
        <Button type="button" className="blue-button" onClick={() => history.push("/register")}>Register</Button>
      </div>
    </div>
  );
}

export default LoginPage;