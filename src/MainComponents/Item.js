import React, { useState } from 'react';
import EditItemForm from '../FormComponents/EditItemForm';
import { Button, Grid } from 'semantic-ui-react';
import { useRecoilValue } from 'recoil';
import { currentListState } from '../Recoil/atoms';

const Item = props => {

  const { item, handleList } = props

  const currentList = useRecoilValue(currentListState)
  const [complete, setComplete] = useState(item.complete)
  const [edit, setEdit] = useState(false)

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => handleList(currentList.id))
  }

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
            <Button.Group>
              <Button positive onClick={() => {setComplete(!complete);handleComplete(item.id)}}>{ complete ? "x" : "✓" }</Button>
              <Button.Or />
              <Button primary onClick={() => setEdit(!edit)}>✎</Button>
              <Button.Or />
              <Button negative onClick={() => deleteItem(item.id)}>⌫</Button>
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