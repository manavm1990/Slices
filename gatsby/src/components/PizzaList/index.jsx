import PropTypes from "prop-types"
import React from "react"
import Pizza from "./Pizza"
import Styled from "./Styles"

const PizzasList = ({ pizzaNodes: pizzas }) => (
  <Styled>
    {pizzas.map(({ id, name, slug: { current }, toppings, image }) => (
      <Pizza
        key={id}
        name={name}
        linkTo={current}
        toppings={toppings}
        image={image}
      />
    ))}
  </Styled>
)

PizzasList.propTypes = {
  pizzaNodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
      toppings: PropTypes.arrayOf(
        PropTypes.exact({ id: PropTypes.string, name: PropTypes.string })
      ),
      image: PropTypes.exact({
        asset: PropTypes.exact({
          fluid: PropTypes.exact({ src: PropTypes.string }),
        }),
      }),
    })
  ).isRequired,
}

export default PizzasList
