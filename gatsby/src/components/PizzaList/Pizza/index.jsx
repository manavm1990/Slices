import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Styled from "./Styles"

const Pizza = ({
  name: pizzaName,
  linkTo,
  toppings,
  image: {
    asset: { fluid },
  },
}) => (
  <Styled>
    <Link to={`/pizza/${linkTo}`}>
      <h2>
        <span className="mark">{pizzaName}</span>
      </h2>
    </Link>
    <p>
      {/* TODO: Consider another component */}
      {toppings.map(({ name }) => name).join(", ")}
    </p>
    <Img fluid={fluid} alt={pizzaName} />
  </Styled>
)

export default Pizza

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  toppings: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      fluid: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      ),
    }),
  }).isRequired,
}
