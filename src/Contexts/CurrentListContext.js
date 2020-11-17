import React from 'react'

const CurrentListContext = React.createContext({
  currentList: null, 
  setCurrentList: () => {}
})

export default CurrentListContext