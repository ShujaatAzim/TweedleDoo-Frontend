import React from 'react'
import List from '../Components/List'

const ListContainer = props => {

  const { currentList, allItems, setCurrentList } = props

  let currentItems = allItems.filter(item => item.list_id === currentList.id)
  let completedItems = [...currentItems]
  completedItems = completedItems.filter(item => item.complete === true)

  const reGetList = id => {
    fetch(`http://localhost:3000/lists/${id}`)
    .then(resp => resp.json())
    .then(list => setCurrentList(list))
  }

  return (
    <div>
      <div>
        <List {...props} reGetList={reGetList} currentItems={currentItems} />
      </div>
      <div>
        { currentItems.length === 0 ? "No items! Add some below:" : 
          completedItems.length !== currentItems.length ? `You have ${ currentItems.length - completedItems.length} todos left!` : 
          "List complete! Yay!" }
      </div>
    </div>
  )
}

export default ListContainer;
