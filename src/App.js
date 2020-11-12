import React, { useState, useEffect } from 'react'
import ListContainer from './ContainerComponents/ListContainer'
import ItemFormContainer from './ContainerComponents/ItemFormContainer'

const App = () => {

  const [allItems, setAllItems] = useState([])
  const [allLists, setAllLists] = useState([])
  const [newItem, setNewItem] = useState("".trim())
  const [currentList, setCurrentList] = useState(null)

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

  const handleChange = e => {
    fetch(`http://localhost:3000/lists/${e.target.value}`)
    .then(resp => resp.json())
    .then(list => setCurrentList(list))
  }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>To Do List</h1>
      <h6>By Shujaat Azim</h6>
      <br />
      <div>
        <label>Choose a List:</label>
        <select name="lists" defaultValue="" onChange={e => handleChange(e)}>
          <option value="" disabled hidden>Choose here</option>
          { allLists.map(list => <option key={list.id} value={list.id}>{list.name}</option>) }
        </select>
      </div>
      <br />
      <div>
        { currentList ? <ListContainer allLists={allLists} allItems={allItems} currentList={currentList} getItems={getItems} /> : null }
      </div>
      <div>
        { currentList ? <ItemFormContainer newItem={newItem} setNewItem={setNewItem} currentList={currentList} getItems={getItems} /> : null }
      </div>
    </div>
  )
}

export default App;
