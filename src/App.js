import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './MainComponents/Home';
import Profile from './MainComponents/Profile';
import Login from './MainComponents/Login';
import Register from './MainComponents/Register';
import { Header } from 'semantic-ui-react';

const App = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Header as="h1" attached>
          <Header.Content>TweedleDoo</Header.Content>
        </Header>
        <Header as="h6">By Shujaat Azim</Header> 
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;