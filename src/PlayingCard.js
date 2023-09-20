import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import { useFlip } from "./hooks";  // Import the useFlip hook

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlip(true);  // Use the useFlip hook

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
