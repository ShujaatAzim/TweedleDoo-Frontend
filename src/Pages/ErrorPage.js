import React from 'react';

const ErrorPage = props => {
  return (
    <h2>{props.location.state.error}</h2>
  );
}

export default ErrorPage;