import React, { useState } from 'react'
import Item from './Item'
import EditListForm from './EditListForm'
import { Button } from 'semantic-ui-react'

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
      { editingName ? null : 
        <div>
          <Button.Group>
            <Button onClick={() => setCurrentList(null)}>Hide List</Button>
              <Button.Or />
            <Button onClick={() => setEditingName(true)}>Edit List</Button>
              <Button.Or />
            <Button onClick={() => deleteList()}>Delete List</Button>
          </Button.Group>
        </div>
      }
      { editingName ? 
          <EditListForm currentList={currentList} getLists={getLists} setEditingName={setEditingName} setCurrentList={setCurrentList} /> 
        : null }
      <br />
      <br />
      { currentItems.map(item => <Item key={item.id} item={item} getItems={getItems} />) }
      <br />
    </div>
  )
}

export default List