import React, { useState } from "react"

import { Link } from "react-router-dom"
import { Navbar, NavItem, NavbarToggler, Nav, Collapse } from "reactstrap"
import { useMediaQuery } from "react-responsive"
import { FaBars } from "react-icons/fa"

import CartWidget from "./CartWidget"
import Animate from "../Motion/Animate"

import { useCartContext } from "../../context/CartContext"
import logo from "../../assets/logo/logo.svg"

import "./navbar.scss"

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const { cartList } = useCartContext()

  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  return (
    <div>
      <Navbar
        color="primary"
        container="lg"
        expand="md"
        className="py-2 py-sm-3"
        fixed="top"
        light
      >
        <Link to="/">
          <img src={logo} alt="logo" height={48} />
        </Link>

        <NavbarToggler onClick={() => setOpen(!open)}>
          <FaBars color="white" />
        </NavbarToggler>

        {isSmallScreen && !!cartList.length && (
          <Animate>
            <CartWidget />
          </Animate>
        )}

        <Collapse navbar isOpen={open}>
          <Nav
            className="mx-auto mt-1 align-items-center mt-md-0 gap-0 gap-md-4 nav-bar"
            navbar
          >
            <NavItem>
              <Link to="/" className="nav-link">
                Productos
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/category/MLA1652" className="nav-link">
                Notebooks
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/category/MLA1672" className="nav-link">
                Almacenamiento
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/category/MLA14407" className="nav-link">
                Monitores
              </Link>
            </NavItem>
          </Nav>
        </Collapse>

        {isBigScreen && !!cartList.length && (
          <Animate>
            <CartWidget />
          </Animate>
        )}
      </Navbar>
    </div>
  )
}

export default NavBar
