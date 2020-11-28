import React, { useState } from 'react'

const EditListForm = props => {

  const { currentList, getLists, setEditingName, setCurrentList } = props

  const [newName, setNewName] = useState(currentList.name)

  const editList = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/lists/${id}`, {
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
    .then(() => setCurrentList(null))
    .then(() => setEditingName(false))
    .then(() => getLists())
  }

  return (
    <div>
      <form onSubmit={e => editList(e, currentList.id)}>
        <input type="text" placeholder={currentList.name} onChange={e => setNewName(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default EditListForm