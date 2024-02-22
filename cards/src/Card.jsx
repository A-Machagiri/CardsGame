import React from "react";

const Card = ({ type }) => {
  let cardContent;

  switch (type) {
    case "cat":
      cardContent = "😼 Cat Card";
      break;
    case "defuse":
      cardContent = "🙅‍♂️ Defuse Card";
      break;
    case "shuffle":
      cardContent = "🔀 Shuffle Card";
      break;
    case "explodingKitten":
      cardContent = "💣 Exploding Kitten Card";
      break;
    default:
      cardContent = "Unknown Card";
  }

  return <div className="card">{cardContent}</div>;
};

export default Card;
