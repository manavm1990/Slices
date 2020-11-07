import React from "react"
import { Link } from "gatsby"
import Style from "./style"

const Nav = () => (
  <Style>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pizzas">
          <span role="img" aria-label="pizza">
            🍕
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/order">Order Ahead!</Link>
      </li>
    </ul>
  </Style>
)

export default Nav
