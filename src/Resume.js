import React from 'react'
import {
  Image,
  Grid,
  Button,
  Modal,
} from 'semantic-ui-react'
import styled from 'styled-components';

import Greenland from './images/greenland.jpg'
import Photo from './images/photoResume.png'
import Simple from './images/simpleResume.png'


class Resume extends React.Component{
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render(){
    return(
      <MainHeader>
        <MyGrid columns='two'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Modal trigger={
                <ResumeImage
                  src={Photo}
                  size="medium"
                />
              }>
              <Modal.Content>
                <Image src={Photo} size="huge" />
              </Modal.Content>
              </Modal>
            </Grid.Column>
            <Grid.Column width={6}>
              <Modal trigger={
                <ResumeImage
                  src={Simple}
                  size="medium"
                  />
              }>
              <Modal.Content image>
                <Image src={Simple} size="huge" />
              </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        </MyGrid>
      </MainHeader>
    )
  }
}

const MainHeader = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${Greenland});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
`
const MyGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ResumeImage = styled(Image)`

&:hover {
  opacity: 0.4;
  }

`
export default Resume