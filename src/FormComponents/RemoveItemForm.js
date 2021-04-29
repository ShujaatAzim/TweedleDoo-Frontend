import React from 'react';
import { Button } from 'semantic-ui-react';

const RemoveItemForm = props => {

  const { item, setRemoveItem, handleList, currentList } = props;

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => setRemoveItem(false))
    .then(() => handleList(currentList.id))
  }

  return (
    <div>
      <p>Delete this item?</p>
      <Button.Group>
        <Button type="submit" className="green-button" onClick={() => deleteItem(item.id)}>Submit</Button>
        <Button.Or />
        <Button type="button" className="red-button" onClick={() => setRemoveItem(false)}>Cancel</Button>
      </Button.Group>
    </div>
  );
}

export default RemoveItemForm;