import React, { useState } from "react";

import {
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Nav,
  Collapse,
} from "reactstrap";

import logo from "../assets/logo/logo.svg";
import { FaBars } from "react-icons/fa";

import "./navbar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar
        color="primary"
        container="lg"
        expand="md"
        className="py-3 py-sm-4"
        light
      >
        <NavLink href="/">
          <img src={logo} alt="logo" height={45} />
        </NavLink>
        <NavbarToggler onClick={() => setOpen(!open)}>
          <FaBars color="white" />
        </NavbarToggler>
        <Collapse navbar isOpen={open}>
          <Nav className="ms-auto mt-4 mt-md-0 gap-0 gap-md-4 nav-bar" navbar>
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
      </Navbar>
    </div>
  );
};

export default NavBar;
