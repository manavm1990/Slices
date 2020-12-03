import PropTypes from "prop-types"
import React from "react"
import Pizza from "./Pizza"

const PizzasList = ({ pizzaNodes: pizzas }) => (
  <ul>
    {pizzas.map(({ id, name, slug: { current }, toppings }) => (
      <Pizza key={id} name={name} linkTo={current} toppings={toppings} />
    ))}
  </ul>
)

PizzasList.propTypes = {
  pizzaNodes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PizzasList
