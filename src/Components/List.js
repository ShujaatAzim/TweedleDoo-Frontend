import React, { useState } from 'react'
import Item from './Item'
import EditListForm from './EditListForm'

const List = props => {

  const { currentList, getItems, allItems, setCurrentList, getLists } = props

  let currentItems = allItems.filter(item => item.list_id === currentList.id)
  let completedItems = [...currentItems]
  completedItems = completedItems.filter(item => item.complete === true)

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
    <div>
      <h3>
        { currentList.name }
      </h3>
      <div>
        <button onClick={() => setCurrentList(null)}>Hide List</button>
        <button onClick={() => setEditingName(!editingName)}>{ editingName ? "Cancel Edit" : "Edit List" }</button>
        <button onClick={() => deleteList()}>Delete List</button>
      </div>
      { editingName ? <EditListForm currentList={currentList} getLists={getLists} setEditingName={setEditingName} setCurrentList={setCurrentList} /> 
        : null }
      <br />
      <div>
        { currentItems.map(item => <Item key={item.id} item={item} getItems={getItems} />) }
      </div>
      <br />
      <div>
        { currentItems.length === 0 ? "No items! Add some below:" : 
          completedItems.length !== currentItems.length ? `You have ${ currentItems.length - completedItems.length} todos left!` : 
          "List complete! Yay!" }
      </div>
    </div>
  )
}

export default List