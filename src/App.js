import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
import { Header } from 'semantic-ui-react';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("dooCreds")))

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Header as="h1" attached>
          <Header.Content>TweedleDoo</Header.Content>
        </Header>
        <Header as="h6">By Shujaat Azim</Header> 
        <br />
      </div>
      <div>
      <br />
      { user && user.logged === true ? 
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      : 
      <Switch>
        <Route exact path="/" component={() => <LoginPage setUser={setUser} />} />
        <Route exact path="/register" component={() => <RegisterPage setUser={setUser} />} /> 
        <Route component={NotFoundPage} />
      </Switch>
      }
      </div>
    </div>
  );
}

export default App;