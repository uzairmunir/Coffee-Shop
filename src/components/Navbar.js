import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
