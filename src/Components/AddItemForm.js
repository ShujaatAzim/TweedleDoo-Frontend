import React from 'react'

const AddItemForm = props => {

  const { newItem, getItems, setNewItem } = props

  const addNewItem = e => {
    e.preventDefault()
    const payload = { item: {list_id: props.currentList.id, content: newItem}}

    if (newItem !== "") {
      fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(() => getItems())
      .then(() => setNewItem(""))
    } else {
      alert("It can't be blank, dawg")
      setNewItem("")
    }
  }

  return (
    <div>
      <form onSubmit={e => addNewItem(e)}>
        <input type="text" placeholder="add item" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddItemForm