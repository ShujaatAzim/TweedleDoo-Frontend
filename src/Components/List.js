import React from 'react'
import Item from './Item'

const List = props => {

  const { currentList, getItems, allItems, setCurrentList, getLists } = props

  let currentItems = allItems.filter(item => item.list_id === currentList.id)
  let completedItems = [...currentItems]
  completedItems = completedItems.filter(item => item.complete === true)

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
      <p>
        { currentList.name }
      </p>
      <div>
        <button onClick={() => setCurrentList(null)}>Hide List</button>
        <button onClick={() => deleteList()}>Delete List</button>
      </div>
      <br />
      <div>
        { currentItems.map(item => <Item key={item.id} item={item} getItems={getItems} />) }
      </div>
      <br />
      <div>
        { completedItems.length !== currentItems.length ? `You have ${ currentItems.length - completedItems.length} todos left!` : "List complete! Yay!" }
      </div>
    </div>
  )
}

export default List