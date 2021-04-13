import React, { useState, useEffect } from 'react';
import ListContainer from '../ContainerComponents/ListContainer';
import NewListForm from '../FormComponents/NewListForm';
import { useRecoilState } from 'recoil';
import { currentListState, creatingListState } from '../Recoil/atoms';
import { Button, Select } from 'semantic-ui-react';

const HomePage = () => {

  const [allItems, setAllItems] = useState([])
  const [allLists, setAllLists] = useState([])
  const [currentList, setCurrentList] = useRecoilState(currentListState)
  const [creatingList, setCreatingList] = useRecoilState(creatingListState)

  const user = JSON.parse(localStorage.getItem("dooCreds"))

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
      { currentList || creatingList ? null :
      <div>
        <h1>Welcome, {user.username}!</h1>
        <label>Choose a List</label>
        <div>
          <Select placeholder="Choose List" options={options} onChange={(e, data) => handleList(data.value)}/>
        </div>
      </div> 
      }
      <br />
      { !currentList && !creatingList ?
        <div>
          <h4>Or, create new list!</h4>
          <div>
            <Button primary disabled={creatingList} onClick={() => {setCurrentList(null);setCreatingList(true)}}>Create List</Button>
          </div>
        </div> : null 
      }
      { creatingList ? <div><NewListForm getLists={getLists} handleList={handleList} setCreatingList={setCreatingList} /></div> : null }
      { currentList ? <div><ListContainer allItems={allItems} handleList={handleList} getItems={getItems} getLists={getLists} /></div> : null }
    </div>
  );
}

export default HomePage;