import React from "react"
import styled from 'styled-components'

import Coding from './images/coding.jpg'

class Contact extends React.Component{
  render(){
    return(
      <MainHeader>
        <MyHeader> CONTACT ME </MyHeader>
        <MyDiv>
          <MyText>
            If I'm not out climbing in the mountains, or in the kitchen cooking a meal for my wife, I'm likely in the backyard with my dog writing some code. 
            <br />
            <br />
            I'm easily reachable by the following methods:
          </MyText>
          <ContactText>
             <a href="mailto:andrew.yasso@gmail.com">Andrew.Yasso@Gmail.Com</a>
             <br />
             248.342.9359
          </ContactText>
        </MyDiv>
      </MainHeader>
    )
  }
}

const MainHeader = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${Coding});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 80vh;
  width: 100%;
  padding-top: 40px;
  color: black;
`

const MyText = styled.div`
  text-align: left;
  padding: 20px;
  font-size: 1.25em;
  line-height: 1.5em;
  color: white;
`
const MyDiv = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) );
  float: right;
  margin: 50px 300px 0px 0px;
  width: 475px;
  height: 300px;
  border: 1px solid white;
`

const MyHeader = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  padding-bottom: 10px;
`

const ContactText = styled.div`
  padding: 20px;
  font-size: 1.125;
  line-height: 1.75em;
  color: white;
  text-align: center;
  letter-spacing: 4px;
`

export default Contact