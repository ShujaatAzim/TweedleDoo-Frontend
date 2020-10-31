import React from 'react'
import Item from './Item'

const List = props => {

  const { allItems, getItems } = props

  return (
    <div>
      { allItems !== [] ? allItems.map(item => <Item key={item.id} item={item} getItems={getItems} />) : null }
    </div>
  )
}

export default List