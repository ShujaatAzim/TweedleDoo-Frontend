import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

const NewListForm = props => {

  const { getLists, setCreatingList, handleList } = props

  const [newListName, setNewListName] = useState("")

  const createList = e => {
    e.preventDefault()

    const payload = { list: {name: newListName} }
    
    if (newListName !== "") {
      fetch('http://localhost:3000/lists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(newList => handleList(newList.id))
    .then(() => getLists())
    .then(() => setNewListName(""))
    .then(() => setCreatingList(false))
    } else {
      alert("It can't be blank, dawg")
      setNewListName("")
    }
  }

  return (
    <div>
      <label>Create a new list!</label>
      <form onSubmit={e => createList(e)}>
        <Input type="text" value={newListName} placeholder="new list name" onChange={e => setNewListName(e.target.value)} />
        <Button.Group>
          <Button type="submit" primary>Submit</Button>
          <Button.Or />
          <Button type="button" negative onClick={() => setCreatingList(false)}>Cancel</Button>
        </Button.Group>
      </form>
    </div>
  )
}

export default NewListForm