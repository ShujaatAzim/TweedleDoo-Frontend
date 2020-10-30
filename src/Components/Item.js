import React from "react"

const Item = props => {
  
  const { item, deleteItem } = props

  return (
    <div>
      {item.content}
      <button onClick={() => deleteItem(item.id)}>
        X
      </button>
    </div>
  )
}
export default Item;