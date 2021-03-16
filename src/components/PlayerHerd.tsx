import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { PLAYER } from "../types";

type Props = {
  player: PLAYER;
};

export function PlayerHerd({ player }: Props) {
  const { state } = useContext(GameContext);
  const { herd } = state[player];

  return (
    <p>
      player {player} has a herd size of {herd.length}
    </p>
  );
}
