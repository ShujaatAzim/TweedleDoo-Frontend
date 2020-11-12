import React from 'react'
import AddItemForm from '../Components/AddItemForm'

const ItemFormContainer = props => {

  const { newItem, setNewItem, currentList, getItems } = props
  return (
    <div>
      <AddItemForm newItem={newItem} setNewItem={setNewItem} currentList={currentList} getItems={getItems} />
    </div>
  )
}

export default ItemFormContainer