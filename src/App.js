import React, { useState, useEffect } from 'react'
import ListContainer from './ContainerComponents/ListContainer'
import NewListForm from './FormComponents/NewListForm'
import { useRecoilState } from 'recoil'
import { currentListState, creatingListState } from './Recoil/atoms'
import { Button, Select } from 'semantic-ui-react'

const App = () => {

  const [allItems, setAllItems] = useState([])
  const [allLists, setAllLists] = useState([])
  const [currentList, setCurrentList] = useRecoilState(currentListState)
  const [creatingList, setCreatingList] = useRecoilState(creatingListState)

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

  const handleList = id => {
    fetch(`http://localhost:3000/lists/${id}`)
    .then(resp => resp.json())
    .then(list => setCurrentList(list))
  }

  let options = []
  allLists.map(list => options.push({ key: list.id, value: list.id, text: list.name }))

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TweedleDoo</h1>
      <h6>By Shujaat Azim</h6>
      { currentList || creatingList ? null :
      <div>
        <label>Choose a List</label>
        <div>
          <Select placeholder="Choose List" options={options} onChange={(e, data) => handleList(data.value)}/>
        </div>
      </div> 
      }
      <br />
      { !currentList && !creatingList ?
        <div>
          Or, create new list!
          <div>
            <Button primary disabled={creatingList} onClick={() => {setCurrentList(null);setCreatingList(!creatingList)}}>Create List</Button>
          </div>
        </div> : null 
      }
      { creatingList ? <div><NewListForm getLists={getLists} handleList={handleList} setCreatingList={setCreatingList} /></div> : null }
      { currentList ? <div><ListContainer allItems={allItems} handleList={handleList} getItems={getItems} getLists={getLists} /></div> : null }
    </div>
  )
}

export default App
