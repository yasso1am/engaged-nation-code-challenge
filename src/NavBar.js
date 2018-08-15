import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import AndrewLogo from './images/AndrewLogo.png'
import { 
  Menu,
  Image,
  Responsive,
  Icon,
} from 'semantic-ui-react';

class NavBar extends React.Component {

  handleClick = () => {
    console.log('clicked')
  }
  render() {
    return(
      <Spacer>
      <Responsive 
        as={MyMenu} 
        minWidth={769}
        inverted 
        borderless
      >
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
            <MyItem link href="https://www.engagednation.com/" target="_blank">
              <MyFirstText> ENGAGED NATION WEBSITE </MyFirstText>
            </MyItem>
            <MyItem as={Link} to="/">
              <MyText> HOME </MyText>
            </MyItem>
            <MyItem as={Link} to="/answers">
              <MyText> ANSWERS </MyText>
            </MyItem> 
            <MyItem as={Link} to="/resume">
              <MyText> RESUME </MyText>
            </MyItem>
            <MyItem as={Link} to="/contact">
              <MyText> CONTACT </MyText>
            </MyItem>
          </Menu.Menu>
        </Responsive>
        
        <Responsive 
          as={MobileMenu}
          maxWidth={768}
          inverted
          borderless
          >
           <MobileLogo
            as={Link} to="/"
            name="Logo"
          >
            <Image
              size="small"
              src={AndrewLogo}
              name="Andrew Logo"
              alt="Andrew Yasso Logo made to look like Engaged Nation's Logo"
            />
          <Menu.Item onClick={this.handleClick}>
            <Icon
              color="teal"
              name="sidebar"
              size="large"
            />
          </Menu.Item>
          </MobileLogo>
          </Responsive>
      </Spacer>
    )
  }
}

const MyLogo = styled(Menu.Item)`
display: flex;
width: 200px;
justify-content: space-around;
`

const MobileLogo = styled(Menu.Item)`
width: 100vw;
`

const MobileMenu = styled(Menu)`
  height: 73px;
  width: 100vw;
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
  overflow: auto;
`

export default withRouter(NavBar)

