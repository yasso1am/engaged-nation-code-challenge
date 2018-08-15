import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <MyContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </MyContainer>
     </div>
    );
  }
}

const MyContainer = styled.div`
  background-color: grey;
  height: 100vh;
`

export default App;
