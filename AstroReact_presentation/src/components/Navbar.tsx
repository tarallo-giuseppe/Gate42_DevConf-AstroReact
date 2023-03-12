import React from "react"
import { Navbar, NavbarBrand, NavLink } from "reactstrap"
import "../styles/global.css"

const NavBar = () => {
  return (
    <div>
      <Navbar color="#211a1d">
        <NavbarBrand>
          <h1 className="navBrand">ASTROreact</h1>
        </NavbarBrand>
        <NavLink className="homeLink">Home</NavLink>
        <NavLink className="productsLink">Products</NavLink>
        <NavLink className="pricingLink">Pricing</NavLink>
        <NavLink className="contactLink">Contact</NavLink>
        <NavLink className="logoutLink">Logout</NavLink>
      </Navbar>
    </div>
  )
}

export default NavBar
