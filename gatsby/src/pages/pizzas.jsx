import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

const PizzasPage = ({
  data: {
    pizzas: { nodes },
  },
}) => (
  <p>
    <span role="img" aria-label="pizza">
      🍕
    </span>
    There are {nodes.length} 🍕s!!!
  </p>
)

PizzasPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default PizzasPage

export const pageQuery = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              # GraphQL Fragment for (base64, asseturl, src, etc.) - all the things that we typically need.
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
