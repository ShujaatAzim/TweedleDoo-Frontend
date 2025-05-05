import { Button } from 'semantic-ui-react';
import urlHost from "../urlHelper"

const RemoveListForm = props => {

  const { currentList, setDeletingList, setCurrentList, getLists } = props
  const creds = JSON.parse(localStorage.getItem("dooCreds"))

  const deleteList = id => {
    fetch(`${urlHost}/lists/${id}`, {
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