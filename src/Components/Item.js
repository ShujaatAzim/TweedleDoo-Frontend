import React, { useState } from 'react'
import EditItemForm from './EditItemForm'

const Item = props => {

  const { item, getItems } = props

  const [complete, setComplete] = useState(false)
  const [edit, setEdit] = useState(false)

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => getItems())
  }

  return (
    <div style={{ textDecoration: (complete ? "line-through" : null ) }}>
      <b>{item.content}</b>
      <div>
        <button onClick={() => setComplete(!complete)}>{ complete ? "Mark Incomplete" : "Mark Complete" }</button>
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