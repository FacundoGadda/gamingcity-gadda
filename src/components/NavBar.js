import React, { useState } from "react";

import {
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Nav,
  Collapse,
} from "reactstrap";

import { FaBars } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'

import CartWidget from "./CartWidget";
import logo from "../assets/logo/logo.svg";

import "./navbar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  return (
    <div>
      <Navbar
        color="primary"
        container="lg"
        expand="md"
        className="py-1 py-sm-2"
        light
      >
        <NavLink href="/">
          <img src={logo} alt="logo" height={48} />
        </NavLink>

        <NavbarToggler onClick={() => setOpen(!open)}>
          <FaBars color="white" />
        </NavbarToggler>

 
        {isSmallScreen && <CartWidget />}

        <Collapse navbar isOpen={open}>
          <Nav
            className="mx-auto mt-1 align-items-center mt-md-0 gap-0 gap-md-4 nav-bar"
            navbar
          >
            <NavItem>
              <NavLink href="/">Productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Componentes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Notebooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Perifericos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        {isBigScreen && <CartWidget />}

      </Navbar>
    </div>
  );
};

export default NavBar;
