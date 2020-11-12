import React from 'react'
import Item from './Item'

const List = props => {

  const { currentList, getItems } = props

  return (
    <div>
      <p>
        { currentList.name }
      </p>
      <div>
        { currentList.items.map(item => <Item key={item.id} item={item} getItems={getItems} />) }
      </div>
      <br />
      <div>
        You have {currentList.items.length} todos left!
      </div>
    </div>
  )
}

export default List