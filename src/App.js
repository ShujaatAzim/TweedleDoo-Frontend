import React, { useState, useEffect } from 'react'
import ListContainer from './ContainerComponents/ListContainer'
import ItemFormContainer from './ContainerComponents/ItemFormContainer'
import NewListForm from './Components/NewListForm'
import { Button } from 'semantic-ui-react'

const App = () => {

  const [allItems, setAllItems] = useState([])
  const [allLists, setAllLists] = useState([])
  const [newItem, setNewItem] = useState("".trim())
  const [creatingList, setCreatingList] = useState(false)
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

  const handleCurrentList = e => {
    fetch(`http://localhost:3000/lists/${e.target.value}`)
    .then(resp => resp.json())
    .then(list => setCurrentList(list))
  }

  const reGetList = id => {
    fetch(`http://localhost:3000/lists/${id}`)
    .then(resp => resp.json())
    .then(list => setCurrentList(list))
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TweedleDoo</h1>
      <h6>By Shujaat Azim</h6>
      { currentList || creatingList ? null :
      <div>
        <label>Choose a List</label>
        <div>
          <select name="lists" defaultValue="" onChange={e => handleCurrentList(e)}>
            <option value="" disabled hidden>Choose here</option>
            { allLists.map(list => <option key={list.id} value={list.id}>{list.name}</option>) }
          </select>
        </div>
      </div> }
      <br />
      { !currentList && !creatingList ?
        <div>
          Or, create new list!
          <div>
            <Button primary disabled={creatingList} onClick={() => {setCurrentList(null);setCreatingList(!creatingList)}}>Create List</Button>
          </div>
        </div> : null 
      }
      { creatingList ? 
        <div>
          <NewListForm getLists={getLists} setCreatingList={setCreatingList} />
        </div> : null }
      <br />
      { currentList ? 
      <div>
        <div>
          <ListContainer reGetList={reGetList} allItems={allItems} currentList={currentList} setCurrentList={setCurrentList} getItems={getItems} getLists={getLists} />
        </div>
        <div>
          <ItemFormContainer newItem={newItem} setNewItem={setNewItem} currentList={currentList} getItems={getItems} />
        </div>
      </div> : null 
      }
    </div>
  )
}

export default App
