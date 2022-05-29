import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterText>
    <p>© 2022 Minden Jog fenntartva.</p>
    <p> Kamara</p>
    <p>Vadgazdálkodási Alap</p>
    <p>Kapcsolat</p>
  </FooterText>
  )
}

export default Footer


const FooterText = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;

    p {
      align-items:center;
      margin-left: 60px;
      cursor: pointer;
    }
    @media(max-width: 810px) {
      &{
 
      }
`