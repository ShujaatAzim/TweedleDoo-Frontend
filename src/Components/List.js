import React from 'react'
import Item from './Item'

const List = props => {

  const { allItems, getItems } = props

  return (
    <div>
      <div>
        { allItems !== [] ? allItems.map(item => <Item key={item.id} item={item} getItems={getItems} />) : null }
      </div>
      <br />
      <div>
        You have {allItems.length} todos left!
      </div>
    </div>
  )
}

export default List