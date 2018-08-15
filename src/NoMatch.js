import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

class NoMatch extends Component {
  render() {
    return (
      <MyWrapper>
      
        <Header as='h1' textAlign='center'>
           Sorry, I didn't have time to create that page. Let's go back to the homepage and try again?
           <br />
           <br />

          <Link to='/'> 
          Home
          </Link>

        </Header>
      </MyWrapper>
    );
  }
}

const MyWrapper = styled.div`
  margin: 0 auto;
  padding: 45px 0;
  text-align: center;
  max-width: 85%;
  height: 80vh;
`

export default NoMatch;
