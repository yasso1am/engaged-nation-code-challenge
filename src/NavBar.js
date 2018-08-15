import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import AndrewLogo from './images/AndrewLogo.png'
import { 
  Menu,
  Image,
} from 'semantic-ui-react';

class NavBar extends React.Component {

  render() {
    return(
      <Spacer>
        <MyMenu inverted borderless>
          <MyLogo
            as={Link} to="/"
            name="Logo"
          >
            <Image
              size="small"
              src={AndrewLogo}
              name="Andrew Logo"
              alt="Andrew Yasso Logo made to look like Engaged Nation's Logo"
            />
          </MyLogo>
          <Menu.Menu position="right">
            <MyItem as={Link} to="/">
              <MyFirstText> HOME </MyFirstText>
            </MyItem>
            <MyItem as={Link} to="/answers">
              <MyText> ANSWERS </MyText>
            </MyItem> 
            <MyItem as={Link} to="/resume">
              <MyText> RESUME </MyText>
            </MyItem>
          </Menu.Menu>
        </MyMenu>
      </Spacer>
    )
  }
}

const MyLogo = styled(Menu.Item)`
display: flex;
width: 200px;
justify-content: space-around;
`

const MyItem = styled(Menu.Item)`
display: flex:
justify-content: space-around;
`

const MyText = styled.div`
color: #96c9cc;
font-size: 1.1em;
`

const MyFirstText = styled.div`
color: #f2c532;
font-size: 1.1em;
`

const MyMenu = styled(Menu)`
  height: 73px;
`

const Spacer = styled.div`
  padding-bottom: 0px;
`

export default withRouter(NavBar)

