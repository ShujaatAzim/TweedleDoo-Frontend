import React from 'react'
import Item from './Item'

const List = props => {

  const { allItems, deleteItem } = props

  return (
    <div>
      { allItems !== [] ? allItems.map(item => <Item key={item.id} item={item} deleteItem={deleteItem} />) : null }
    </div>
  )
}

export default List