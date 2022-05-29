import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
      <Nav>
              <NavLogo>
                  <img src="/images/deer.png"></img>
                  <h4>Magyar Vadásztársaság</h4>
              </NavLogo>
              <NavText>
                  <a>
                      <span>Főoldal</span>
                  </a>
                  <a>
                      <span>Kamara</span>
                  </a>
                  <a>
                      <span>Vadgazdálkodási Alap</span>
                  </a>
                  <a>
                      <span>Vizsgák</span>
                  </a>
                  <a>
                      <span>Hírek</span>
                  </a>
                  <a>
                      <span>Kapcsolat</span>
                  </a>

              </NavText>
          </Nav>

  )
}

export default Header

const Nav = styled.div`
    height: 60px;
    background-color:#EE9C4B;
    padding: 0 36px;
    display:flex;
    align-items: center;


`
const NavLogo = styled.div`
    width:80px;
    align-items:center;
    display: flex;

    img{
        width: 50px;
    }
`
const NavText = styled.div`
    display:flex;
    justify-content: center;
    flex: 1;
    margin:left 25px;
    align-items: center;
    a{
        margin: 20px;
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px;

        img{
            margin: 2.5px;
            height:20px;
        }

        span {
            cursor: pointer;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.3px;
            position: relative;

            &:after {
                content:"";
                height: 2px;
                background:white;
                position:absolute;
                left: 0;
                bottom: -6px;
                right: 0;
                transform: scaleX(0);
            }
        
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                transition: 400ms all ease;
            }
        }

    }
`

