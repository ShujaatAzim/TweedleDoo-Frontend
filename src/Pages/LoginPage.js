import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

  const history = useHistory();

  return (
    <div>
      <Button.Group>
        <Button type="button" positive onClick={() => history.push("/home")}>Home</Button>
        <Button.Or />
        <Button type="button" positive onClick={() => history.push("/about")}>About</Button>
        <Button.Or />
        <Button type="button" positive onClick={() => history.push("/register")}>Register</Button>
      </Button.Group>
    </div>
  );
}

export default LoginPage;