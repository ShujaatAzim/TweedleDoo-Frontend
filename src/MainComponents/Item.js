import React, { useState } from 'react';
import EditItemForm from '../FormComponents/EditItemForm';
import RemoveItemForm from '../FormComponents/RemoveItemForm';
import { Button, Grid } from 'semantic-ui-react';
import { useRecoilValue } from 'recoil';
import { currentListState } from '../Recoil/atoms';

const Item = props => {

  const { item, handleList } = props

  const currentList = useRecoilValue(currentListState)
  const [complete, setComplete] = useState(item.complete)
  const [edit, setEdit] = useState(false)
  const [removeItem, setRemoveItem] = useState(false)

  const handleComplete = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        content: item.content,
        complete: !complete
      })
    })
    .then(() => handleList(currentList.id))
  }

  const styles = {
    textDecoration: "line-through",
    textDecorationStyle: "double"
  }

  return (
    <>
      <Grid.Row>
        <Grid.Column style={{ paddingLeft: "33%"}}>
          <b style={ complete ? styles : undefined }>{item.content}</b>
        </Grid.Column>
        <Grid.Column style={{ paddingRight: "30%" }}>
          { edit ? 
            <EditItemForm item={item} handleList={handleList} currentList={currentList} setEdit={setEdit} />
              :
            removeItem ? 
            <RemoveItemForm item={item} handleList={handleList} currentList={currentList} setRemoveItem={setRemoveItem} />
              :
            <Button.Group>
              <Button className="green-button" onClick={() => {setComplete(!complete);handleComplete(item.id)}}>
                { complete ? "×" : "✓" }
              </Button>
              <Button.Or />
              <Button className="blue-button" animated onClick={() => setEdit(!edit)}>
                <Button.Content visible>✎</Button.Content>
                <Button.Content hidden>Edit</Button.Content>
              </Button>
              <Button.Or />
              <Button className="red-button" animated onClick={() => setRemoveItem(!removeItem)}>
                <Button.Content visible>⌫</Button.Content>
                <Button.Content hidden>Delete</Button.Content>
              </Button>
            </Button.Group>
          }
        </Grid.Column>
      </Grid.Row>
      <br />
      <br />
    </>
  );
}
export default Item;