import React, { useState, useEffect } from 'react'
import AddItemForm from './AddItemForm'
import List from './List'

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

  const addNewItem = e => {
    e.preventDefault()
    const payload = { item: {content: newItem}}

    if (newItem !== "") {
      fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(() => getItems())
      .then(() => setNewItem(""))
    } else {
      alert("It can't be blank, dawg")
      setNewItem("")
    }
  }

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => getItems())
  }

  return (
    <div>
      <div>
        <AddItemForm addNewItem={addNewItem} newItem={newItem} setNewItem={setNewItem} />
      </div>
      <div>
        <List allItems={allItems} deleteItem={deleteItem} />
      </div>
    </div>
  )
}

export default ListContainer;
