import { FaPepperHot as icon } from "react-icons/fa";

export default {
  name: "topping",
  title: "Toppings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Topping Name",
      type: "string",
      description: "What is the name of the topping?",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
  preview: {
    select: {
      // 'title'  🔑 to match field name 👆🏽 (not 'title' ❗)
      title: "name",
      vegetarian: "vegetarian",
    },
    prepare: ({ title, vegetarian }) => ({
      title: `${title} ${vegetarian ? "🌱" : "🍖"}`,
    }),
  },
};
