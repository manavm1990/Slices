import { MdLocalPizza as pizza } from "react-icons/md";
import lib from "../lib";

export default {
  name: "pizza",
  title: "Pizzas",
  type: "document",
  icon: pizza,
  fields: [
    ...lib.commonFields,
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the 🍕 in cents",

      // https://www.sanity.io/docs/validation
      validation: (Rule) => Rule.min(1000),
      // TODO: Add custom input component
    },
    {
      name: "toppings",
      title: "Toppings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topping" }] }],
    },
  ],
  preview: {
    select: {
      // ℹ️ The 🔑s are for references in the `prepare` fxn
      title: "name",
      media: "image",
      topping0: "toppings.0.name",
      topping1: "toppings.1.name",
      topping2: "toppings.2.name",
      topping3: "toppings.3.name",
    },
    prepare: ({ title, media, ...toppings }) => {
      const subtitle = Object.values(toppings)

        // Filter out any 'undefined' toppings 🎩
        .filter(Boolean)
        .join(", ");

      return {
        title,
        media,
        subtitle,
      };
    },
  },
};
