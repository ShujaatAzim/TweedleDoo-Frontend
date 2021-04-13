import React from 'react';

const ProfilePage = () => {

  const creds = JSON.parse(localStorage.getItem("dooCreds"))

  return (
    <div>
      <h1>{creds.username}'s page.</h1>
      <p><b>TOKEN:</b> {creds.jwt}</p>
    </div>
  );
}

export default ProfilePage;