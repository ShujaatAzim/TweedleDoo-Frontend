import { useState } from 'react';
import Item from './Item';
import EditListForm from '../FormComponents/EditListForm';
import { useRecoilState } from 'recoil';
import { currentListState } from '../Recoil/atoms';
import { Button, Grid } from 'semantic-ui-react';
import RemoveListForm from '../FormComponents/RemoveListForm';

const List = props => {

  const { getLists, handleList } = props

  const [currentList, setCurrentList] = useRecoilState(currentListState)
  const [editingName, setEditingName] = useState(false)
  const [deletingList, setDeletingList] = useState(false)

  return (
    <div>
      <h3>
        { currentList.name }
      </h3>
      { editingName ? 
        <EditListForm handleList={handleList} getLists={getLists} currentList={currentList} setEditingName={setEditingName} />
          : 
        deletingList ? 
        <RemoveListForm setCurrentList={setCurrentList} getLists={getLists} currentList={currentList} setDeletingList={setDeletingList} />
          :
        <div>
          <Button.Group>
            <Button className="blue-button" onClick={() => setCurrentList(null)}>Hide List</Button>
              <Button.Or />
            <Button className="green-button" onClick={() => setEditingName(true)}>Edit List</Button>
              <Button.Or />
            <Button className="red-button" onClick={() => setDeletingList(true)}>Delete List</Button>
          </Button.Group>
        </div>
      }
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