import React from "react"
import { Link } from "gatsby"
import Styled from "./Styles"

const Nav = () => (
  <Styled>
    <ul className="center">
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
      {/* <li>
        <Link to="/">
          <Logo />
        </Link>
      </li> */}
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/order">Order Ahead!</Link>
      </li>
    </ul>
  </Styled>
)

export default Nav
