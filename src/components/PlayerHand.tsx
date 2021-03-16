import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { PLAYER } from "../types";
import { Card } from "./Card";

type Props = {
  player: PLAYER;
};

export function PlayerHand({ player }: Props) {
  const { state } = useContext(GameContext);
  const { hand } = state[player];

  return (
    <div>
      <p>player {player}</p>
      <div className="flex">
        {hand.map((card) => (
          <Card key={card.id} card={card} /> 
        ))}
      </div>
    </div>
  );
}
