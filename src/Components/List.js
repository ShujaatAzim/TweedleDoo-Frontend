import React, { useState } from 'react'
import Item from './Item'
import EditListForm from './EditListForm'

const List = props => {

  const { currentList, getItems, currentItems, setCurrentList, getLists } = props

  const [editingName, setEditingName] = useState(false)

  const deleteList = () => {
    if (currentItems.length === 0) {
      fetch(`http://localhost:3000/lists/${currentList.id}`, {
        method: "DELETE"
      })
      .then(() => setCurrentList(null))
      .then(() => getLists())
    } else {
      alert("Delete all items from this list first!")
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        { currentList.name }
      </h3>
      <div>
        <button onClick={() => setCurrentList(null)}>Hide List</button>
        <button onClick={() => setEditingName(!editingName)}>{ editingName ? "Cancel Edit" : "Edit List" }</button>
        <button onClick={() => deleteList()}>Delete List</button>
      </div>
      { editingName ? 
          <EditListForm currentList={currentList} getLists={getLists} setEditingName={setEditingName} setCurrentList={setCurrentList} /> 
        : null }
      <br />
      <div>
        { currentItems.map(item => <Item key={item.id} item={item} getItems={getItems} />) }
      </div>
      <br />
    </div>
  )
}

export default List