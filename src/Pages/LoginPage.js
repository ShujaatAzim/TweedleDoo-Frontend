import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import urlHost from "../urlHelper"

const LoginPage = props => {

  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e, creds) => {
    e.preventDefault();

    fetch(`${urlHost}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user: creds })
    })
    .then(resp => resp.json())
    .then(data => localStorage.setItem("dooCreds", JSON.stringify(data)))
    .then(() => props.setUser(JSON.parse(localStorage.getItem("dooCreds"))))
    .then(() => history.push('/'))
  }

  return (
    <div>
      <h1>Log in!</h1>
      <div style={{ margin: "auto", width: "40%" }}>
        <Form onSubmit={e => handleLogin(e, {"username": email, "password": password})}>
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
        <Button type="button" className="blue-button" onClick={e => handleLogin(e, {"username": "Test", "password": "124"})}>Try It Out!</Button>
      </div>
    </div>
  );
}

export default LoginPage;