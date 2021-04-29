import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

const NewListForm = props => {

  const creds = JSON.parse(localStorage.getItem("dooCreds"))
  const { getLists, setCreatingList, handleList } = props
  const [newListName, setNewListName] = useState("")

  const createList = e => {
    e.preventDefault()

    const payload = { list: {name: newListName, user_id: creds.id, items: []} }
    
    if (newListName !== "") {
      fetch('http://localhost:3000/lists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${creds.jwt}`
      },
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(newList => handleList(newList.id))
    .then(() => getLists())
    .then(() => setCreatingList(false))
    } else {
      alert("It can't be blank, dawg")
    }
  }

  return (
    <div>
      <label>Create a new list!</label>
      <form onSubmit={e => createList(e)}>
        <Input type="text" value={newListName} placeholder="new list name" onChange={e => setNewListName(e.target.value)} />
        <Button.Group>
          <Button type="submit" className="green-button">Submit</Button>
          <Button.Or />
          <Button type="button" className="red-button" onClick={() => setCreatingList(false)}>Cancel</Button>
        </Button.Group>
      </form>
    </div>
  );
}

export default NewListForm;