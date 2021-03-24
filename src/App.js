import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AboutPage from './Pages/AboutPage';
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
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;