import React, { useState } from 'react'

const Item = props => {

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => getItems())
  }
  
  const { item, getItems } = props

  const [complete, setComplete] = useState(false)

  return (
    <div style={{ textDecoration: (complete ? "line-through" : null ) }}>
      {item.content}
      <button onClick={() => setComplete(!complete)}>Complete</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  )
}
export default Item;