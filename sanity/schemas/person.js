import { MdPerson as person } from "react-icons/md";
import lib from "../lib";

export default {
  name: "person",
  title: "Slicemasters",
  type: "document",
  icon: person,
  fields: [...lib.commonFields, { name: "bio", title: "👱🏽‍♂️ Bio", type: "text" }],
};
