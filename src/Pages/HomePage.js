import { useEffect } from 'react';
import ListContainer from '../ContainerComponents/ListContainer';
import NewListForm from '../FormComponents/NewListForm';
import { useRecoilState } from 'recoil';
import { currentListState, creatingListState, listsState } from '../Recoil/atoms';
import { Button, Select } from 'semantic-ui-react';
import urlHost from "../urlHelper"

const HomePage = () => {

  const [lists, setLists] = useRecoilState(listsState)
  const [currentList, setCurrentList] = useRecoilState(currentListState)
  const [creatingList, setCreatingList] = useRecoilState(creatingListState)

  const creds = JSON.parse(localStorage.getItem("dooCreds"))

  useEffect(() => {
    getLists()
    // eslint-disable-next-line
  }, [])

  const getLists = () => {
    fetch(`${urlHost}/lists`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(lists => setLists(lists))
  }

  const handleList = id => {
    fetch(`${urlHost}/lists/${id}`)
    .then(resp => resp.json())
    .then(list => setCurrentList(list))
  }

  return (
    <div>
      { currentList || creatingList ? null :
      <div>
        <h2>Welcome, {creds.username}!</h2>
        <br />
        { lists.length === 0 ? <p>No lists! Create one below!</p> : 
        <div>
          <label>Choose a List</label>
          <br />
          <br />
          <Select 
            placeholder="Choose List" 
            options={lists.map(list => ({key: list.id, text: list.name, value: list.id}))} 
            onChange={(e, data) => handleList(data.value)} 
          />
        </div> }
      </div> 
      }
      { currentList ? <div><ListContainer handleList={handleList} getLists={getLists} /></div> : null }
      <br />
      <br />
      { !currentList && !creatingList ?
        <div> 
          <h4>Or, create new list!</h4>
          <div>
            <Button className="blue-button" primary disabled={creatingList} 
            onClick={() => {setCurrentList(null);setCreatingList(true)}}>Create List</Button>
          </div>
        </div> : null 
      }
      { creatingList ? <div><NewListForm getLists={getLists} handleList={handleList} setCreatingList={setCreatingList} /></div> : null }
    </div>
  );
}

export default HomePage;