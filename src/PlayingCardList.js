import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

function PlayingCardList() {
  const [cards, addCard, clearCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
      <button onClick={() => addCard()}>Add a playing card!</button>
      <button onClick={() => clearCards()}>Delete all cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
      {cards.map(cardData => (
  <PlayingCard key={cardData.cards[0].code} front={cardData.cards[0].image} />
))}
      </div>
    </div>
  );
}

export default PlayingCardList;
