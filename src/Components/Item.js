import React, { useState } from 'react'
import EditItemForm from './EditItemForm'

const Item = props => {

  const { item, getItems } = props

  const [complete, setComplete] = useState(item.complete)
  const [edit, setEdit] = useState(false)

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => getItems())
  }

  const handleComplete = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        content: item.content,
        complete: !complete
      })
    })
    .then(() => getItems())
  }

  return (
    <div style={{ textDecoration: (complete ? "line-through" : undefined ) }}>
      <b>{item.content}</b>
      <div>
        <button onClick={() => {setComplete(!complete);handleComplete(item.id)}}>{ complete ? "Mark Incomplete" : "Mark Complete" }</button>
        <button onClick={() => setEdit(!edit)}>{ edit ? "Cancel Edit" : "Edit Item" }</button>
        <button onClick={() => deleteItem(item.id)}>Delete Item</button>
      </div>
      <br />
      <div>
        { edit ? <EditItemForm item={item} getItems={getItems} setEdit={setEdit} /> : null }
      </div>
      <br />
    </div>
  )
}
export default Item