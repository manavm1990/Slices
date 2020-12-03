import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Pizza = ({ name: pizzaName, linkTo, toppings }) => (
  <li>
    <Link to={`/pizza/${linkTo}`}>
      <h2>
        <span className="mark">{pizzaName}</span>
      </h2>
      <p>
        {/* TODO: Consider another component */}
        {toppings.map(({ name }) => name).join(", ")}
      </p>
    </Link>
  </li>
)

export default Pizza

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  toppings: PropTypes.arrayOf(PropTypes.object).isRequired,
}
