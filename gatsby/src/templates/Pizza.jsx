import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

const PizzaTemplate = ({
  data: {
    pizza: { name, toppings },
  },
}) => (
  <ul>
    <li>{name}</li>
    <li>
      <ul>
        {toppings.map(({ id, name: toppingName, vegetarian }) => (
          <li key={id}>
            {toppingName} - {vegetarian ? "🌱" : "🍖"}
          </li>
        ))}
      </ul>
    </li>
    <li>{toppings[0].name}</li>
  </ul>
)

PizzaTemplate.propTypes = {
  data: PropTypes.shape({
    pizza: PropTypes.shape({
      name: PropTypes.string,
      toppings: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          vegetarian: PropTypes.bool.isRequired,
        })
      ),
    }),
  }).isRequired,
}

export const query = graphql`
  query($current: String!) {
    pizza: sanityPizza(
      slug: {
        current: {
          eq: $current # Access 'current' from 'pageContext'
        }
      }
    ) {
      name
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`

export default PizzaTemplate
