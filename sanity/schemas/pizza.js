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
  ],
};
