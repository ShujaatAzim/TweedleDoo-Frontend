import React, { useState, useEffect } from 'react'
import AddItemForm from '../Components/AddItemForm'
import List from '../Components/List'

const ListContainer = () => {

  const [allItems, setAllItems] = useState([])
  const [newItem, setNewItem] = useState("".trim())

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    .then(items => setAllItems(items))
  }

  return (
    <div>
      <div>
        <AddItemForm getItems={getItems} newItem={newItem} setNewItem={setNewItem} />
      </div>
      <br />
      <div>
        <List allItems={allItems} getItems={getItems} />
      </div>
    </div>
  )
}

export default ListContainer;
