import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import PizzaList from "components/PizzaList"

const PizzasPage = (
  // Gatsby 'magically' passes in GraphQL results as 'props'
  {
    data: {
      pizzas: { nodes },
    },
  }
) => (
  // More Gatsby magic - Pre-rendering means no need to wait for loading/data, etc.
  <PizzaList pizzaNodes={nodes} />
)

PizzasPage.propTypes = {
  data: PropTypes.exact({
    pizzas: PropTypes.exact({ nodes: PropTypes.arrayOf(PropTypes.object) }),
  }).isRequired,
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
