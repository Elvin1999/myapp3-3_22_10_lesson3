import React from "react";

// const people = [
//   "YusifKenan Aysel : Software Engineer",
//   "Rahmanli Rubail : IT Specialist",
//   "Qasimov Cavid : Designer",
//   "Muqumova Semaye : Front-End Developer",
//   "Memmedov Enver : QA",
//   "Hemzeyev Mehemmed : Back-End Developer",
//   "Huseynov Huseyn : UI/UX Designer",
// ];

// const listItems = people.map((p) => <li>{p}</li>);

// export default function ListItems() {
//   return <ul>{listItems}</ul>;
// }

import { people } from "../../data";
import { getImageUrl } from "../../Utils";
const persons = people.filter((p) => p.id >= 1);

const listItems = persons.map((p) => (
  <li key={p.id} id={p.id}>
    <img className="user-img" alt="user" src={getImageUrl(p)}></img>
    <h3>
      Name : <b>{p.name}</b>
    </h3>
    <h4>
      Profession : <b>{p.profession}</b>
    </h4>
    <hr />
  </li>
));

export default function ListItems() {
  return <ul>{listItems}</ul>;
}
