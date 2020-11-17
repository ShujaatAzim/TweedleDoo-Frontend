import React, { useState } from 'react'

const Item = props => {

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => getItems())
  }

  const editItem = (e, id) => {
    e.preventDefault()
    console.log(id)
  }  
  const { item, getItems } = props

  const [complete, setComplete] = useState(false)
  const [newName, setNewName] = useState(item.name)
  const [edit, setEdit] = useState(false)

  return (
    <div style={{ textDecoration: (complete ? "line-through" : null ) }}>
      {item.content}
      <button onClick={() => setComplete(!complete)}>Complete</button>
      <button onClick={() => setEdit(!edit)}>Edit</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
      { edit ? 
        <div>
          <form onSubmit={(e) => editItem(e, item.id)}>
            <input type="text" value={item.name} onChange={e => setNewName(e.target.value)} />
            <input type="submit" />
          </form>
        </div> : null }
    </div>
  )
}
export default Item;