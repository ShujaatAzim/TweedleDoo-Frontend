import React from 'react';
import { Button } from 'semantic-ui-react';

const RemoveListForm = props => {

  const { currentList, setDeletingList, setCurrentList, getLists } = props
  const creds = JSON.parse(localStorage.getItem("dooCreds"))

  const deleteList = id => {
    fetch(`http://localhost:3000/lists/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`
      }
    })
    .then(() => setCurrentList(null))
    .then(() => getLists())
  }

  return (
    <div>
      <p>Delete this list?</p>
      <Button.Group>
        <Button type="button" className="green-button" onClick={() => deleteList(currentList.id)}>Submit</Button>
        <Button.Or />
        <Button type="button" className="red-button"onClick={() => setDeletingList(false)}>Cancel</Button>
      </Button.Group>
    </div>
  );
}

export default RemoveListForm;