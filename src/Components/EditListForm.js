import React, { useState } from 'react'

const EditListForm = props => {

  const { currentList, getLists, setEditingName } = props

  const [newName, setNewName] = useState(currentList.name)

  const editList = e => {
    e.preventDefault()
    fetch(`http://localhost:3000/lists/${currentList.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: newName
      })
    })
    .then(() => setNewName(""))
    .then(() => setEditingName(false))
    .then(() => getLists())
  }

  return (
    <div>
      <form onSubmit={e => editList()}>
        <input type="text" placeholder={currentList.name} onChange={e => setNewName(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default EditListForm