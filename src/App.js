import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import Footer from './Footer';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <MyContainer>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </MyContainer>
      <Footer />
     </div>
    );
  }
}

const MyContainer = styled.div`
  background-color: #eff6f7;
`

export default App;
