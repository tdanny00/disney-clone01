import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <NavLogo src="/images/logo.svg"/>

        <NavText>
            <a>
                <img src="/images/home-icon.svg" ></img>
                <span>Home</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" ></img>
                <span>Search</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" ></img>
                <span>Watchlist</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" ></img>
                <span>Originals</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" ></img>
                <span>Movies</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" ></img>
                <span>Series</span>
            </a>

        </NavText>

    </Nav>
  )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background-color:rgba(1, 1, 28, 1);
    padding: 0 36px;
    display:flex;

`
const NavLogo = styled.img`
    width:80px;
    align-items:center;
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
