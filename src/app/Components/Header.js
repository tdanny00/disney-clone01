import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
    const [sideMenuStatus, setSideMenuStatus] = useState(false);
    return (
        <Nav>
            <p>
                <a><img src="/images/logo.png"></img></a>
            </p>
            <NavText>
                <a>
                    <span>Főoldal</span>
                </a>
                <a>
                    <span>Kamara</span>
                </a>
                <a>
                    <span>Vadgazdálkodás</span>
                </a>
                <a>
                    <span>Vizsgák</span>
                </a>
                <a>
                    <span>Kapcsolat</span>
                </a>
            </NavText>
            <RightMenu>
                <CostumeMenu onClick={() => setSideMenuStatus(true)}/>
                <SideMenu show={sideMenuStatus}>
                    <SideMenuWrapper>
                        <SideMenuClose onClick={() => setSideMenuStatus(false)} />
                    </SideMenuWrapper>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Used Inventory</a></li>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Existing Inventory</a></li>
                </SideMenu>
            </RightMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 60px;
    background-color:#EE9C4B;
    padding: 0 36px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 100px;

    }
    @media(max-width: 810px) {
        & {
        overflow-x:hidden;
        padding: 0 40px;
        overflow: hidden;
        justify-content:space-between;
        }
`

const NavText = styled.div`
    display:flex;
    justify-content: center;
    margin-right: 70px;
    flex: 1;
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
    @media(max-width:810px) {
        & {
            display: none;
        }
`

const SideMenu = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width: 300px;
    z-index:100;
    list-style: none;
    padding: 20px;
    display:flex;
    flex-direction: column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: 400ms all ease;
    li{
        padding: 15px 0;
        margin-left: 15px;
        a:hover{
            background-color: rgba(0,0,0, 0.1);
            border-radius: 10px;
        }
    }
`
const SideMenuClose = styled(CloseIcon)`
    cursor:pointer;
    color: black;
`
const SideMenuWrapper = styled.div`
    display: flex; 
    justify-content: flex-end;
    padding: 10px;
`
const RightMenu = styled.div`
    display: flex;
    align-items:center;
    @media(max-width: 810px) {
        &{         
            justify-content: space-between;
        }
`
const CostumeMenu = styled(MenuIcon)`
    cursor: pointer;
    @media(max-width: 810px) {
        &{
            justify-content: space-between;
        }
`
