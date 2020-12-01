import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

const EditItemForm = props => {

  const { item, setEdit, getItems } = props

  const [newContent, setNewContent] = useState(item.content)

  const editItem = (e, id) => {
    e.preventDefault()
    if (newContent !== item.content) {
      fetch(`http://localhost:3000/items/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          content: newContent,
          complete: item.complete
        })
      })
      .then(() => setNewContent(""))
      .then(() => setEdit(false))
      .then(() => getItems())
    } else {
      setEdit(false)
      alert("Item not changed!")
    }
  }  

  return (
    <div>
      <form onSubmit={e => editItem(e, item.id)}>
        <Input type="text" placeholder={item.content} onChange={e => setNewContent(e.target.value)} />
        <Button.Group>
          <Button type="submit" positive>Submit</Button>
          <Button.Or />
          <Button type="button" onClick={() => setEdit(false)}>Cancel</Button>
        </Button.Group>
      </form> 
    </div>
  )
}

export default EditItemForm