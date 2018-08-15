import React from 'react'
import {
  Button,
} from 'semantic-ui-react';
import styled from 'styled-components'

const Footer = () => {
  return(
    <div>
      <MyMenu>
        <MyText> 
          Address: 2580 Chantemar Street. Las Vegas, NV 89135 - Phone: (248) 342-9359 - Email: andrew.yasso@gmail.com
          <br/>
          Copyright © 2018 Andrew Yasso, LLC - All Rights Reserved
        </MyText>
          <Social>
            <Button circular color='facebook' icon='facebook' href="https://www.facebook.com/andrew.yasso" target="_blank"/>
            <Button circular icon='github' href="https://github.com/yasso1am" target="_blank" />
            <Button circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/andrew-yasso/" target="_blank" />
          </Social>
      </MyMenu>
    </div>
  )
}

const MyText = styled.div`
  font-size: 1.2em;
  overflow: auto;
`
const MyMenu = styled.div`
  height: 80px;
  color: grey;
  font-weight: 200;
  line-height: 2em;
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: auto;
`

const Social = styled.div`
`

export default Footer