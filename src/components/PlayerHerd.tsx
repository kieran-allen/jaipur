import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { PLAYER } from "../types";
import { Card } from "./Card";

type Props = {
  player: PLAYER;
};

export function PlayerHerd({ player }: Props) {
  const { state } = useContext(GameContext);
  const { herd } = state[player];

  return (
    <div className="flex">
      {herd.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
