import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, listsState } from '../Recoil/atoms';
import { Button } from 'semantic-ui-react';

const ProfilePage = () => {

  const creds = JSON.parse(localStorage.getItem("dooCreds"))
  const history = useHistory();

  const [user, setUser] = useRecoilState(userState)
  const [lists, setLists] = useRecoilState(listsState)

  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(data => {setLists(data.lists);setUser(data.user);console.log(data)})
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>{user.username}'s page</h1>
      <br />
      <p>Number of Lists: {lists.length}</p>
      <br />
      <Button className="blue-button" onClick={() => history.push('/')}>Home</Button>
    </div>
  );
}

export default ProfilePage;