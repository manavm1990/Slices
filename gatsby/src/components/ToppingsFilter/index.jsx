import PropTypes from "prop-types"
import React from "react"

const countToppings = toppings =>
  Object.values(
    toppings.reduce((tally, { id, name }) => {
      const ret = tally

      // Use 'id' instead of 'name' in case of emojis
      ret[id] = ret[id]
        ? { ...ret[id], count: (ret[id].count += 1) }
        : { id, name, count: 1 }
      return ret
    }, {})
  )

const getToppingsList = pizzas =>
  pizzas.map(({ toppings }) => toppings.map(topping => topping)).flat()

const ToppingsFilter = ({ pizzas }) =>
  countToppings(getToppingsList(pizzas)).map(({ id, name, count }) => (
    <p key={id}>
      {name} - {count}
    </p>
  ))

ToppingsFilter.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      toppings: PropTypes.arrayOf(
        PropTypes.exact({ id: PropTypes.string, name: PropTypes.string })
      ),
    })
  ).isRequired,
}

export default ToppingsFilter
