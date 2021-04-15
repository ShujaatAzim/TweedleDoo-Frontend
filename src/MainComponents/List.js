import React, { useState } from 'react';
import Item from './Item';
import EditListForm from '../FormComponents/EditListForm';
import { useRecoilState } from 'recoil';
import { currentListState } from '../Recoil/atoms';
import { Button, Grid } from 'semantic-ui-react';

const List = props => {

  const { getLists, handleList } = props
  const creds = JSON.parse(localStorage.getItem("dooCreds"))

  const [currentList, setCurrentList] = useRecoilState(currentListState)
  const [editingName, setEditingName] = useState(false)

  const deleteList = () => {
    if (currentList.items.length === 0) {
      fetch(`http://localhost:3000/lists/${currentList.id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${creds.jwt}`
        }
      })
      .then(() => setCurrentList(null))
      .then(() => getLists())
    } else {
      alert("Delete all items from this list first!")
    }
  }

  return (
    <div>
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
          <EditListForm handleList={handleList} getLists={getLists} currentList={currentList} setEditingName={setEditingName} /> 
        : null }
      <br />
      <br />
      <div>
        <Grid columns={2} divided>
          { currentList.items.map(item => <Item key={item.id} item={item} handleList={handleList} />) }
        </Grid>
      </div>
      <br />
    </div>
  );
}

export default List;