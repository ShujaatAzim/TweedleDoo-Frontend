import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, listsState } from '../Recoil/atoms';

const ProfilePage = () => {

  const creds = JSON.parse(localStorage.getItem("dooCreds"))
  const history = useHistory();

  const [user, setUser] = useRecoilState(userState)
  const [lists, setLists] = useRecoilState(listsState)

  useEffect(() => {
    const creds = JSON.parse(localStorage.getItem("dooCreds"))
    fetch('http://localhost:3000/profile', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(data => {setLists(data.lists);setUser(data.user);console.log(data)})
  }, [])

  const handleLogout = () => {
    setUser(null)
    history.push('/')
  }

  return (
    <div>
      <h1>{user.username}'s page.</h1>
      <p><b>TOKEN:</b> {creds.jwt}</p>
      <p>Number of Lists: {lists.length}</p>
      <button onClick={() => history.push('/')}>Home</button>
      <button onClick={() => {localStorage.removeItem("dooCreds");handleLogout()}}>Logout</button>
    </div>
  );
}

export default ProfilePage;