import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      : 
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage setUser={setUser} />} /> 
        <Route path="/error" element={<ErrorPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      }
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;