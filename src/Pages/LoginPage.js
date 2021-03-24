import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/home")}>Home (test)</button>
      <button onClick={() => history.push("/about")}>About</button>
      <button onClick={() => history.push("/register")}>Register</button>
    </div>
  );
}

export default LoginPage;