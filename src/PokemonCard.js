import React from "react";
import backOfCard from "./back.png";
import "./PokemonCard.css";
import { useFlip } from "./hooks";  // Import the useFlip hook

/* Renders a single pokemon card. */
function PokemonCard({ name, sprite, hp, types, stats }) {
  const [isFlipped, toggleFlip] = useFlip(true);  // Use the useFlip hook

  return (
    <div onClick={toggleFlip} className="PokemonCard Card">
      {isFlipped ? (
        <div className="PokemonCard-front">
          <img src={sprite || backOfCard} alt={name} />
          <h3 className="PokemonCard-title">{name}</h3>
          <div className="PokemonCard-details">
            <p>HP: {hp}</p>
            <p>Type: {types && types.join(", ")}</p>
            <ul className="PokemonCard-stats">
              {stats.map((stat) => (
                <li key={stat.name}>
                  {stat.name}: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={backOfCard} alt="back of card" />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
