import React, { useState } from 'react';
import AddItemForm from '../FormComponents/AddItemForm';

const ItemFormContainer = props => {

  const [newItem, setNewItem] = useState("".trim())

  return (
    <div>
      <AddItemForm {...props} newItem={newItem} setNewItem={setNewItem} />
    </div>
  );
}

export default ItemFormContainer;