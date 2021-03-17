import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { playerTakesOneCardFromMarket } from "../utils/playerTakesOneCardFromMarket";
import { Card } from "./Card";
import { Card as CardType, PLAYER } from "../types";

export function Market() {
  const { state, update } = useContext(GameContext);

  const onCardClick = (card: CardType) => {
    const newState = playerTakesOneCardFromMarket(
      state.deck,
      state.market,
      card.id,
      state[PLAYER.P1],
      PLAYER.P1
    );
    update({
      ...state,
      deck: newState.deck,
      market: newState.market,
      [PLAYER.P1]: newState[PLAYER.P1],
    });
  };

  return (
    <div className="flex">
      {state.market.map((card) => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card)} />
      ))}
    </div>
  );
}
