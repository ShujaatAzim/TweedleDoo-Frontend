import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

const LoginPage = () => {

  const history = useHistory();
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <h1>Log in!</h1>
      <div style={{ margin: "auto", width: "40%" }}>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="password" />
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