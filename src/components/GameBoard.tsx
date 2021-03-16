import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

export function GameBoard() {
  const { state } = useContext(GameContext);

  useEffect(() => {
    console.info(state);
  }, [state]);

  return <></>;
}
