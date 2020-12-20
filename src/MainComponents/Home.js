import React from 'react'
import { Menu } from 'semantic-ui-react'

//will serve as new top level app, after App becomes router base

const Home = () => {
  return (
    <div>
      <Menu poiniting secondary>
        <Menu.Item name="home" />
      </Menu>
    </div>
  )
}

export default Home