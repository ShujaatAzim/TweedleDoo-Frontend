import { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import urlHost from "../urlHelper"

const EditListForm = props => {

  const { currentList, setEditingName, handleList, getLists } = props

  const creds = JSON.parse(localStorage.getItem("dooCreds"))
  
  const [newName, setNewName] = useState(currentList.name)

  const editList = (e, id) => {
    e.preventDefault()
    fetch(`${urlHost}/lists/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${creds.jwt}`
      },
      body: JSON.stringify({
        name: newName
      })
    })
    .then(() => setEditingName(false))
    .then(() => getLists())
    .then(() => handleList(currentList.id))
  }

  return (
    <div>
      <form onSubmit={e => editList(e, currentList.id)}>
        <Input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        <Button.Group>
          <Button type="submit" className="green-button">Submit</Button>
          <Button.Or />
          <Button type="button" className="red-button"onClick={() => setEditingName(false)}>Cancel</Button>
        </Button.Group>
      </form>
    </div>
  );
}

export default EditListForm;