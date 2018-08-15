import React from 'react'
import styled from 'styled-components'
import AnswerSegment from './AnswerSegment'
import {
  Grid,
  Menu,
  Container,
} from 'semantic-ui-react';

class Answers extends React.Component{
  state = { activeItem: 'Design' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const {activeItem} = this.state
    return(
      <div>
        <MainHeader>
          ANSWERS
        </MainHeader>
      <MyContainer>
      <Container>
      <Grid> 
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <MyItem color="teal" name='Design' active={activeItem === 'Design'} onClick={this.handleItemClick} />
            <MyItem color="teal" name='JavaScript' active={activeItem === 'JavaScript'} onClick={this.handleItemClick} />
            <MyItem color="teal" name='CSS' active={activeItem === 'CSS'} onClick={this.handleItemClick} />
            <MyItem color="teal" name='jQuery' active={activeItem === 'jQuery'} onClick={this.handleItemClick}/>
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <MySegment>
            <AnswerSegment answers={activeItem} />
          </MySegment>
        </Grid.Column>
      </Grid>
      </Container>

      </MyContainer>
      </div>
    )
  }
} 

const MyContainer = styled.div`
  background-image: url('https://www.engagednation.com/wp-content/uploads/2017/07/blue-squares.jpg');
  background-attachment: fixed;
  background-size: cover;
  padding-top: 50px;
  width: 100%;
  height: 75vh;
`

const MySegment = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: #fff;
  height: 65vh;
`

const MyItem = styled(Menu.Item)`
font-size: 22px;
color: #fff;
`

const MainHeader = styled.div`
  background-color: #49a584!important;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
  padding: 30px;
`

export default Answers