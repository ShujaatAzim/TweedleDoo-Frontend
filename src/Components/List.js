import React from 'react'
import Item from './Item'

const List = props => {

  const { currentList, getItems, allItems } = props

  let currentItems = allItems.filter(item => item.list_id === currentList.id)

  return (
    <div>
      <p>
        { currentList.name }
      </p>
      <div>
        { currentItems.map(item => <Item key={item.id} item={item} getItems={getItems} />) }
      </div>
      <br />
      <div>
        You have {currentItems.length} todos left!
      </div>
    </div>
  )
}

export default List