import React, { useState, useEffect } from 'react'
import AddItemForm from '../Components/AddItemForm'
import List from '../Components/List'

const ListContainer = () => {

  const [allItems, setAllItems] = useState([])
  const [allLists, setAllLists] = useState([])
  const [currentList, setCurrentList] = useState(null)
  const [newItem, setNewItem] = useState("".trim())

  useEffect(() => {
    getItems()
    getLists()
  }, [])

  const getItems = () => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    .then(items => setAllItems(items))
  }

  const getLists = () => {
    fetch("http://localhost:3000/lists")
    .then(resp => resp.json())
    .then(lists => setAllLists(lists))
  }

  return (
    <div>
      <br />
      <div>
        <List allItems={allItems} allLists={allLists} getItems={getItems} />
      </div>
      <br />
      <div>
        <AddItemForm getItems={getItems} newItem={newItem} setNewItem={setNewItem} />
      </div>
    </div>
  )
}

export default ListContainer;
