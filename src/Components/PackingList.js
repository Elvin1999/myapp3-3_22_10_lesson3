import React from "react";

//1
// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return (
//       <li className="item">
//         {name}
//         <img
//           className="icon"
//           src="https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png"
//           alt="my-icon"
//         ></img>
//       </li>
//     );
//   }
//   return <li className="item">{name}</li>;
// }

//2

// function Item({ name, isPacked }) {
//   return <li className="item">{isPacked ? name + " OK" : name}</li>;
// }

// 3
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name}
//       {isPacked ? (
//         <img
//           className="icon"
//           src="https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png"
//           alt="my-icon"
//         ></img>
//       ) : (
//         ""
//       )}
//     </li>
//   );
// }

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name}
//       {isPacked && (
//         <img
//           className="icon"
//           src="https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png"
//           alt="my-icon"
//         ></img>
//       )}
//     </li>
//   );
// }

function Item({ name, isPacked }) {
  let itemContent = null;
  if (isPacked) {
    itemContent = (
      <img
        className="icon"
        src="https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png"
        alt="my-icon"
      ></img>
    );
  }
  
  return (
    <li className="item">
      {name} {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Elvin's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space Suit"></Item>
        <Item isPacked={false} name="Helmet with a golden leaf"></Item>
        <Item isPacked={true} name="Photo of child"></Item>
      </ul>
    </section>
  );
}
