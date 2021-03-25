import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

  const history = useHistory();

  return (
    <div>
      <Button.Group>
        <Button type="button" positive>Home</Button>
        <Button.Or />
        <Button type="button" positive>About</Button>
        <Button.Or />
        <Button type="button" positive>Register</Button>
      </Button.Group>
      <button onClick={() => history.push("/home")}>Home (test)</button>
      <button onClick={() => history.push("/about")}>About</button>
      <button onClick={() => history.push("/register")}>Register</button>
    </div>
  );
}

export default LoginPage;