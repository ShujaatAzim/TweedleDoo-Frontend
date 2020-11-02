import React from 'react'
import Item from './Item'

const List = props => {

  const { allItems, allLists, getItems } = props

  return (
    <div>
      <p>
        { allLists.length !== 0 ? allLists[0].name : null }
      </p>
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