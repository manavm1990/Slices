import { MdLocalPizza as pizza } from "react-icons/md";
import { Input as PriceInput } from "../components";
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
      // https://www.sanity.io/docs/validation
      validation: (Rule) => Rule.min(1000),
      inputComponent: PriceInput,
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
    prepare: ({ title, media, ...toppingNames }) => {
      const subtitle = Object.values(toppingNames)
        // Filter out any 'undefined' toppings 🎩
        .slice(0, 3)
        .filter(Boolean)
        .join(", ");

      const annotatedSubTitle =
        subtitle + (toppingNames.topping3 ? ", ..." : "");

      return {
        // ⚠️ These 🔑s are specified by Sanity (we don't rename them! 🙅🏽‍♂️)
        title,
        media,
        subtitle: annotatedSubTitle,
      };
    },
  },
};
