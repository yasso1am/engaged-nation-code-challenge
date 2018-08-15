import React, { Component } from 'react';
import { 
  Header,
  Grid, 
} from 'semantic-ui-react';
import Background from './images/background.png'
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
        <MyContainer>
          <Grid>
            <Grid.Column>
              <MyHeader> Engaged Nation Coding Challenge </MyHeader>
              <SecondHeader as="h2"> Design | Javascript | CSS | jQuery </SecondHeader>
              <MyText>
                Thank you for the opportunity to complete this coding challenge. 
                I hope that my answers and inspires your team of developers to consider me as your next employee.
                They may notice that I have often chosen to use JavaScript ES6 syntax and have omitted semicolons at the end of my code.
                This is a personal stylistic choice and was done on purpose, however I am more than happy to write code that meets Engaged Nation's linting rules.
                I am in no way dogmatic in my approach to code, and am looking forward to working with a professioanl team.
                <br />
                As mentioned to your HR manager on the phone, I am not trying to hide the fact that I am a new developer. I still have learning to do.
                However I am very motivated, eager to learn, and don't bring bad habits along with me.
              </MyText>
            </Grid.Column>
          </Grid>
        </MyContainer>
    );
  }
}

const MyContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 63.5vh;
  display: flex;
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
`

const MyHeader = styled.div`
text-align: center;
font-size: 3.5em;
font-weight: bold;
color: #0680b0;
`

export default Home;
