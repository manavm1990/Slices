import { MdPerson as person } from "react-icons/md";
import lib from "../lib";

export default {
  name: "person",
  title: "Slicemasters",
  type: "document",
  icon: person,
  fields: [
    ...lib.commonFields,
    {
      name: "description",
      title: "Details",
      type: "text",
      description: "Tell us more about this 👱🏾‍♂️",
    },
  ],
};
