import React from 'react'
import {
  Image,
  Grid,
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
          <Grid.Column width={16}>
            <Grid.Row>
              <MyHeader> RESUMES </MyHeader>
            </Grid.Row>
          </Grid.Column>
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
  align-items: baseline;
  padding-top: 40px;
  text-align: center;
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

const MyHeader = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  padding-bottom: 10px;
`
export default Resume