import { MdLocalPizza as pizza } from "react-icons/md";

export default {
  name: "Pizza",
  title: "Pizzas",
  type: "document",
  icon: pizza,
  fields: [
    {
      name: "name",
      title: "🍕 Name",
      type: "string",
      description: "Name of the 🍕",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the 🍕 in cents",

      // https://www.sanity.io/docs/validation
      validation: (Rule) => Rule.min(1000),
      // TODO: Add custom input component
    },
  ],
};
