import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/home")}>Home</button>
      <button onClick={() => history.push("/register")}>Register</button>
    </div>
  );
}

export default Login;