import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const AddItemForm = props => {

  const { newItem, getItems, setNewItem, currentList } = props

  const addNewItem = e => {
    e.preventDefault()
    const payload = { item: {list_id: currentList.id, content: newItem, complete: false}}

    if (newItem !== "") {
      fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(() => setNewItem(""))
      .then(() => getItems())
    } else {
      alert("Can't add blank item!")
      setNewItem("")
    }
  }

  return (
    <div>
      <form onSubmit={e => addNewItem(e)}>
        <Input size="mini" type="text" placeholder="add item" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <Button.Group>
          <Button type="submit">Add</Button>
            <Button.Or />
          <Button type="button" onClick={() => setNewItem("")}>Clear</Button>
        </Button.Group>
      </form>
    </div>
  )
}

export default AddItemForm