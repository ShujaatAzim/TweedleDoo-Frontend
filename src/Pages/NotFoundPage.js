import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const NotFoundPage = () => {

  const history = useHistory();
  
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p>You're just putting in random things after the slash, aren't you? ;)</p>
      <br />
      <Button primary onClick={() => history.push('/')}>Back to Civilization</Button>
    </div>
  );
}

export default NotFoundPage;