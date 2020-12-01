import React, { useState } from 'react'
import EditItemForm from './EditItemForm'
import { Button, Grid } from 'semantic-ui-react'

const Item = props => {

  const { item, getItems } = props

  const [complete, setComplete] = useState(item.complete)
  const [edit, setEdit] = useState(false)

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => getItems())
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
    .then(() => getItems())
  }

  return (
    <>
      <Grid.Row>
        <Grid.Column style={{ paddingLeft: "33%"}}>
          <b style={{ textDecoration: (complete ? "line-through" : undefined ) }}>{item.content}</b>
        </Grid.Column>
        <Grid.Column style={{ paddingRight: "20%" }}>
          <Button.Group>
            <Button onClick={() => {setComplete(!complete);handleComplete(item.id)}}>{ complete ? "Mark Incomplete" : "Mark Complete" }</Button>
            <Button.Or />
            <Button onClick={() => setEdit(!edit)}>{ edit ? "Cancel Edit" : "Edit Item" }</Button>
            <Button.Or />
            <Button onClick={() => deleteItem(item.id)}>Delete Item</Button>
          </Button.Group>
          <div style={{ textAlign: "center" }}>
            { edit ? <EditItemForm item={item} getItems={getItems} setEdit={setEdit} /> : null }
          </div>
        </Grid.Column>
      </Grid.Row>
      <br />
      <br />
    </>
  )
}
export default Item