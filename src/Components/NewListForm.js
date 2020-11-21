import React, { useState } from 'react'

const NewListForm = props => {

  const { getLists, setCreatingList } = props

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
    .then(() => setNewListName(""))
    .then(() => getLists())
    .then(() => setCreatingList(false))
    } else {
      alert("It can't be blank, dawg")
      setNewListName("")
    }
  }

  return (
    <div>
      <form onSubmit={e => createList(e)}>
        <label>New List Name:</label>
        <input type="text" value={newListName} placeholder="new list name" onChange={e => setNewListName(e.target.value)} />
        <input type="submit" />
        <button onClick={() => setCreatingList(false)}>Cancel</button>
      </form>
    </div>
  )
}

export default NewListForm