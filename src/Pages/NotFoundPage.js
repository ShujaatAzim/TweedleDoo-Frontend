import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const NotFoundPage = () => {

  const history = useHistory();
  
  return (
    <div>
      <h1>Page Not Found!</h1>
      <Button onClick={() => history.push('/')}>Back to Safety</Button>
    </div>
  );
}

export default NotFoundPage;