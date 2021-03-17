import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Card } from "./Card";

export function Market() {
  const {
    state: { market },
  } = useContext(GameContext);

  return (
    <div className="flex">
      {market.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
