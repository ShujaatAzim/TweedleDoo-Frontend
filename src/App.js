import { useState } from 'react';
import { Switch, Route, useNavigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
import ErrorPage from './Pages/ErrorPage';
import { Header, Menu } from 'semantic-ui-react';
import './App.css';

const App = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("dooCreds")))

  const handleLogout = () => {
    localStorage.removeItem("dooCreds")
    setUser(null)
    navigate('/')
  }

  return (
    <div className="app">
      <div className="header">
        <Header as="h1">
          { user && user.logged === true ? 
          <Menu secondary fixed>
            <Menu.Item name="Home" onClick={() => navigate('/')} />
            <Menu.Item name="About" onClick={() => navigate('/about')}  />
            <Menu.Item name="Profile" onClick={() => navigate('/profile')}  />
            <Menu.Item name="Logout" onClick={() => handleLogout()} />
          </Menu>
          : 
          <Menu secondary>
            <Menu.Item name="Login" onClick={() => navigate('/login')}  />
            <Menu.Item name="About" onClick={() => navigate('/about')}  />
            <Menu.Item name="Register" onClick={() => navigate('/register')}  />
          </Menu>
          }
        </Header>
      </div>
        <br />
      <div className="body">
      <h1 style={{ fontSize: "6vw" }}>TweedleDoo</h1>
      <br />
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
        <Route exact path="/login" component={() => <LoginPage setUser={setUser} />} />
        <Route exact path="/about" component={AboutPage} />
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