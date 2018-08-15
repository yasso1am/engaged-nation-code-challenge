import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import AndrewLogo from './images/AndrewLogo.png'
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return(
      <div>
        <MyMenu inverted fixed="top">
          <MyItem
            as={Link} to="/"
            fitted="horizontally"
            name="Logo"
          >
            <img src={AndrewLogo}
              width="100px"
              name="Andrew Logo"
              alt="Andrew Yasso Logo made to look like Engaged Nation's Logo"
            />
          </MyItem>
          <Menu.Menu position="right">
            <Link to='/'>
              <Menu.Item name='home' />
            </Link>
            <Link to='/answers'>
              <Menu.Item name='answers' />
            </Link>
            <Link to='/resume'>
              <Menu.Item name='resume' />
            </Link>
          </Menu.Menu>
        </MyMenu>
      </div>
    )
  }
}

const MyItem = styled(Menu.Item)`
display: flex;
width: 200px;
justify-content: space-around;
`

const MyMenu = styled(Menu)`
  height: 72px;
`

export default withRouter(NavBar)

