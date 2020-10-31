import React from "react"

const Item = props => {

  const deleteItem = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE"
    })
    .then(() => getItems())
  }
  
  const { item, getItems } = props

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