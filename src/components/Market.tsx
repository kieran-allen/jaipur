import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { playerTakesOneCardFromMarket } from "../utils/playerTakesOneCardFromMarket";
import { Card } from "./Card";
import { Card as CardType, PLAYER } from "../types";
import { MarketContext } from "../context/MarketContext";

export function Market() {
  const [ isCamelHovered, setIsCamelHovered ] = useState(false);
  const { state, update } = useContext(GameContext);

  const onCardClick = (card: CardType) => {
    const newState = playerTakesOneCardFromMarket(
      state.deck,
      state.market,
      card.id,
      state[PLAYER.P1],
      PLAYER.P1,
    );
    update({
      ...state,
      deck: newState.deck,
      market: newState.market,
      [PLAYER.P1]: newState[PLAYER.P1],
    });
  };

  return (
    <MarketContext.Provider value={{ isCamelHovered, setIsCamelHovered }}>
      <div className="flex">
        {state.market.map((card) => (
          <Card key={card.id} card={card} onClick={() => onCardClick(card)} />
        ))}
      </div>
    </MarketContext.Provider>
  );
}
