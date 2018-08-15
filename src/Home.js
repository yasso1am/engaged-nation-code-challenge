import React, { Component } from 'react';
import { 
  Header,
  Grid, 
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Background from './images/background.png'
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row>
            <Grid.Column mobile={4} computer={16}>
            <HeaderImage>
              <MyWrapper>
              <Grid.Row>
                <MyHeader> Engaged Nation <br /> Coding Challenge </MyHeader>
                <SecondHeader as="h2"> Design | JavaScript | CSS | jQuery </SecondHeader>
              </Grid.Row>
              <Grid.Row>
                <Divider hidden/>
                  <MyText>
                    Thank you for the opportunity to complete this coding challenge. 
                    I hope that my answers and effort inspires your team of developers to consider me as your next employee.
                    They may notice that I chose to use JavaScript ES6 syntax in many places and omitted semicolons at the end of my code.
                    This is a personal stylistic choice and was done on purpose, however I am more than happy to write code that meets Engaged Nation's linting rules.
                    I am in no way dogmatic in my approach to code, and am looking forward to working with a professional team.
                    <br />
                    <br />
                    I am not trying to hide the fact that I am a new developer. I know that I have a lot to learn and to improve. 
                    However you'll never find me frustrated with being told to improve something, and I will strive to meet the standards you set.
                    I am motived, excited to learn, and don't bring bad habits along with me.
                  </MyText>
                  <Grid.Row>
                  <ButtonGroup>
                    <Link to='/answers'>
                      <MyButton>
                      See My Answers
                      </MyButton>
                    </Link>
                    <Link to='/resume'>
                      <MyButton>
                      See My Resume
                      </MyButton>
                    </Link>
                  </ButtonGroup>
                  </Grid.Row>
                  </Grid.Row>
                </MyWrapper>
            </HeaderImage>
            <Grid.Row>

            </Grid.Row>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const HeaderImage = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SecondHeader = styled(Header)`
  text-align: center;
  font-style: italic;
`

const MyText = styled.p`
  text-align: center;
  font-size: 1.2em;
  line-height: 1.5em;
`
const MyWrapper = styled.div`
  padding: 5px 80px;
  text-align: center;
  max-width: 85%;
  max-height: 100%;
  overflow: auto;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`
const MyButton = styled.div`
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  margin: 10px;
  padding: 15px 40px;
  color: white;
  background-color: #007b8a!important;

  &:hover {
    background-color: #fff!important;
    color: #007b8a!important;
  }
`

const MyHeader = styled.div`
text-align: center;
font-size: 4em;
line-height: 1em;
font-weight: bold;
color: #1590cc;
`


export default Home;
