import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../img/logo.png";
import styled from "styled-components";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";

function Navbar() {
  const [sideMenuStatus, setSideMenuStatus] = useState(false);
  return (
    <>
      <div></div>
      <div className="app__navbar">
        <div className="app__navbar-logo">
          <img src={logo}></img>
          <ul className="navbar">
            {["Home", "About", "Experience", "Contact"].map((item) => (
              <li className="app__flex" key={`link-${item}`}>
                <div className="empty-div" id="dot_div" />
                <a className="anchor-tag" href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="socials">
            <a href="https://github.com/tdanny00">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/d%C3%A1niel-t%C3%B6lgyesi-911b58229/">
              <img src={linkedin} />
            </a>
          </div>
          <div className="app__navbar-menu">
            <MenuIcon onClick={() => setSideMenuStatus(true)} />
          </div>
        </div>
      </div>
      <SideMenu show={sideMenuStatus}>
        <SideMenuWrapper>
          <SideMenuClose onClick={() => setSideMenuStatus(false)} />
        </SideMenuWrapper>
        <ul className="sidemenu">
          {[, "Home", "About", "Experience", "Contact"].map((item) => (
            <li key={`link-${item}`}>
              <a
                className="anchor-tag"
                onClick={() => setSideMenuStatus(false)}
                href={`#${item}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </SideMenu>
    </>
  );
}

export default Navbar;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 3;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: 400ms all ease;
  li {
    padding: 15px 0;
    margin-left: 15px;
  }
`;
const SideMenuClose = styled(CloseIcon)`
  cursor: pointer;
`;
const SideMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  z-index: 2;
`;
