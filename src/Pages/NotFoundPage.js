import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const NotFoundPage = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p>You're just putting random things after the slash, aren't you? ;)</p>
      <br />
      <Button primary onClick={() => navigate('/')}>Back to Civilization</Button>
    </div>
  );
}

export default NotFoundPage;