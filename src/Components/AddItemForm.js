import React from 'react'

const AddItemForm = props => {

  const { newItem, addNewItem, setNewItem } = props

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