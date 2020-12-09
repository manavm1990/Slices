import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import ToppingsFilter from "components/ToppingsFilter"
import PizzaList from "components/PizzaList"

const PizzasPage = (
  // Gatsby 'magically' passes in GraphQL results as 'props'
  {
    data: {
      pizzas: { nodes },
    },
  }
) => (
  <main>
    <ToppingsFilter pizzas={nodes} />
    <PizzaList pizzas={nodes} />
  </main>
)

PizzasPage.propTypes = {
  data: PropTypes.exact({
    pizzas: PropTypes.exact({
      nodes: PropTypes.arrayOf(
        // Developer's Note: We don't need to this type of 'breakdown' if we are not using these props in the component.
        PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.string,
          slug: PropTypes.shape({ current: PropTypes.string }),
          toppings: PropTypes.arrayOf(
            PropTypes.exact({ id: PropTypes.string, name: PropTypes.string })
          ),
          image: PropTypes.exact({
            asset: PropTypes.exact({
              fluid: PropTypes.object,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
}

// ⚠️ Only from 'pages'
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

export default PizzasPage
