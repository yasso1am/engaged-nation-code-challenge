import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import NavBar from './NavBar';
import Answers from './Answers';
import Contact from './Contact';
import Resume from './Resume';
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
                    <Route exact path="/answers" component={Answers} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                  </Switch>
                  <Footer />
          </MyContainer>
     </div>
    );
  }
}

const MyContainer = styled.div`
  background-color: #eff6f7;
  height: 100vh;
`

export default App;
