import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
import ErrorPage from './Pages/ErrorPage';
import { Header, Menu } from 'semantic-ui-react';

const App = () => {

  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("dooCreds")))

  return (
    <div style={{ textAlign: "center" }}>
      <div className="header">
        <Header as="h1">
          <Header.Content>TweedleDoo</Header.Content>
        </Header>
        { user && user.logged === true ? 
        <Menu secondary fixed="top" >
          <Menu.Item name="Home" onClick={() => history.push('/')} />
          <Menu.Item name="About" onClick={() => history.push('/about')}  />
          <Menu.Item name="Profile" onClick={() => history.push('/profile')}  />
        </Menu>
        : 
        <Menu secondary fixed="top">
          <Menu.Item name="Login" onClick={() => history.push('/')}  />
          <Menu.Item name="About" onClick={() => history.push('/about')}  />
          <Menu.Item name="Register" onClick={() => history.push('/register')}  />
        </Menu>
        }
      </div>
        <br />
      <div className="body">
      <br />
      { user && user.logged === true ? 
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/error" component={ErrorPage} />
        <Route component={NotFoundPage} />
      </Switch>
      : 
      <Switch>
        <Route exact path="/" component={() => <LoginPage setUser={setUser} />} />
        <Route exact path="/register" component={() => <RegisterPage setUser={setUser} />} /> 
        <Route exact path="/error" component={ErrorPage} />
        <Route component={NotFoundPage} />
      </Switch>
      }
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;